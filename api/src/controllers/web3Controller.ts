import Web3 from 'web3';
import { AbiItem } from 'web3-utils'
import * as EarlyAccessGame from "../abis/EarlyAccessGame.json";
import { Get, Route, Path, Request } from "tsoa";

import express from "express";

const CONTRACT = process.env.CONTRACT || "";
const NODE_PROVIDER = process.env.NODE_PROVIDER || "";

export class Web3Blockchain {

    private static _instance: Web3Blockchain;

    web3?: Web3;
    contract?: any;

    constructor(node_provider: string, contract: string) {
        this.init(node_provider, contract);
    }

    public static getInstance() {
        return this._instance || (this._instance = new this(NODE_PROVIDER, CONTRACT));
    }

    public static instance(node_provider: String | null, contract: String | null) {
        return new this((node_provider || NODE_PROVIDER).toString(), (contract || CONTRACT).toString());
    }

    init = async (node_provider: string, contract: string) => {
        this.web3 = new Web3(node_provider);
        this.contract = new this.web3.eth.Contract(EarlyAccessGame.abi as AbiItem[], contract);
        this.contract.setProvider(node_provider);
    }

    tokenCount = (): Promise<number> => {
        return this.contract.methods.totalSupply().call();
    };

    ownerOf = async (tokenId: number) => {
        let owner = await this.contract.methods.ownerOf(tokenId).call();
        return [tokenId, owner];
    };

    tokensOf = async (account: String) => {
        let accountChecksum = Web3.utils.toChecksumAddress(account.toString());
        let count = await this.tokenCount();
        let promises = []
        for (let i = 0; i < count; i++) {
            promises.push(this.ownerOf(i));
        }
        let owners = await Promise.all(promises);
        let accountTokens: String[] = []
        owners.forEach(o => {
            if (
                o[1] === account || o[1] === accountChecksum
            ) {
                accountTokens.push(o[0]);
            }
        })
        return accountTokens;
    }

    baseURI = async (): Promise<string> => {
        return await this.contract.methods.baseURI().call();
    };

    public isOwnerOf = async (tokenId: number, account: String) => {
        console.log(tokenId, account);
        let accountChecksum = Web3.utils.toChecksumAddress(account.toString());
        const owner = (await this.ownerOf(tokenId))[1];
        return owner === account || owner === accountChecksum;
    }
}

@Route("token")
export class Web3Controller {

    @Get("count")
    public async count(
        @Request() request: express.Request,
    ): Promise<any> {
        const instance = Web3Blockchain.instance(request.oidc.user?.node, request.oidc.user?.contract);
        return instance.tokenCount();
    }

    /**
     * @example tokenId "2"
     */
    @Get("owner/{tokenId}")
    public async owner(
        @Request() request: express.Request,
        @Path() tokenId: number
    ): Promise<String> {
        const instance = Web3Blockchain.instance(request.oidc.user?.node, request.oidc.user?.contract);
        return (await instance.ownerOf(tokenId))[1];
    }

    @Get("account/{account}")
    public async account(
        @Request() request: express.Request,
        @Path() account: string
    ): Promise<String[]> {
        const instance = Web3Blockchain.instance(request.oidc.user?.node, request.oidc.user?.contract);
        return (await instance.tokensOf(account));
    }

    @Get("me")
    public async me(
        @Request() request: express.Request
    ): Promise<String[]> {
        const account = await request.oidc.user?.sub;
        const instance = Web3Blockchain.instance(request.oidc.user?.node, request.oidc.user?.contract);
        return (await instance.tokensOf(account));
    }

    @Get("baseuri")
    public async baseuri(
        @Request() request: express.Request
    ): Promise<String> {
        const instance = Web3Blockchain.instance(request.oidc.user?.node, request.oidc.user?.contract);
        return (await instance.baseURI());
    }
}

export default Web3Blockchain.getInstance;
