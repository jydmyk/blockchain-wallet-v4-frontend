export type BalanceResponseType = {
  results: {
    balances: {
      address: null | string
      balance: string
    }[]
    pubKey: string
  }[]
}

export type BuildTxResponseType = {
  preImages: {
    descriptor: null | string
    preImage: string
    signature?: string
    signatureAlgorithm: 'secp256k1'
    signingKey: string
  }[]
  rawTx: {
    payload: {
      anchorMode: number
      auth: {
        authType: number
        spendingCondition: {
          fee: string
          hashMode: number
          keyEncoding: number
          nonce: string
          signature: {
            data: string
            type: number
          }
          signer: string
        }
      }
      chainId: number
      payload: {
        amount: string
        memo: {
          content: string
          type: number
        }
        payloadType: number
        recipient: {
          address: {
            hash160: string
            type: number
            version: number
          }
          type: number
        }
        type: number
      }
      postConditionMode: number
      postConditions: {
        lengthPrefixBytes: number
        type: number
        values: []
      }
      version: number
    }
    version: number
  }
  txSummary: {
    absoluteFeeEstimate: string
    absoluteFeeMaximum: string
    amount: string
    balance: string
    relativeFee: string
  }
}

export type IndexMultiResponseType = {
  [key in string]: {
    price: number
    timestamp: number
    volume24h: number
  }
}

export type TickerResponseType = {
  [key in string]: {
    '15m': number
    buy: number
    last: number
    sell: number
    symbol: string
  }
}
