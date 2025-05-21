
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model FiatTransaction
 * 
 */
export type FiatTransaction = $Result.DefaultSelection<Prisma.$FiatTransactionPayload>
/**
 * Model CryptoTransaction
 * 
 */
export type CryptoTransaction = $Result.DefaultSelection<Prisma.$CryptoTransactionPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FiatCurrency: {
  THB: 'THB',
  USD: 'USD'
};

export type FiatCurrency = (typeof FiatCurrency)[keyof typeof FiatCurrency]


export const FiatTransactionType: {
  deposit: 'deposit',
  withdraw: 'withdraw'
};

export type FiatTransactionType = (typeof FiatTransactionType)[keyof typeof FiatTransactionType]


export const CryptoCurrency: {
  BTC: 'BTC',
  ETH: 'ETH',
  XRP: 'XRP',
  DOGE: 'DOGE'
};

export type CryptoCurrency = (typeof CryptoCurrency)[keyof typeof CryptoCurrency]


export const CryptoTransactionType: {
  internal: 'internal',
  external: 'external'
};

export type CryptoTransactionType = (typeof CryptoTransactionType)[keyof typeof CryptoTransactionType]


export const OrderType: {
  buy: 'buy',
  sell: 'sell'
};

export type OrderType = (typeof OrderType)[keyof typeof OrderType]


export const OrderStatus: {
  open: 'open',
  matched: 'matched',
  cancelled: 'cancelled'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FiatCurrency = $Enums.FiatCurrency

export const FiatCurrency: typeof $Enums.FiatCurrency

export type FiatTransactionType = $Enums.FiatTransactionType

export const FiatTransactionType: typeof $Enums.FiatTransactionType

export type CryptoCurrency = $Enums.CryptoCurrency

export const CryptoCurrency: typeof $Enums.CryptoCurrency

export type CryptoTransactionType = $Enums.CryptoTransactionType

export const CryptoTransactionType: typeof $Enums.CryptoTransactionType

export type OrderType = $Enums.OrderType

export const OrderType: typeof $Enums.OrderType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fiatTransaction`: Exposes CRUD operations for the **FiatTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiatTransactions
    * const fiatTransactions = await prisma.fiatTransaction.findMany()
    * ```
    */
  get fiatTransaction(): Prisma.FiatTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cryptoTransaction`: Exposes CRUD operations for the **CryptoTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CryptoTransactions
    * const cryptoTransactions = await prisma.cryptoTransaction.findMany()
    * ```
    */
  get cryptoTransaction(): Prisma.CryptoTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Wallet: 'Wallet',
    FiatTransaction: 'FiatTransaction',
    CryptoTransaction: 'CryptoTransaction',
    Order: 'Order',
    Trade: 'Trade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "wallet" | "fiatTransaction" | "cryptoTransaction" | "order" | "trade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      FiatTransaction: {
        payload: Prisma.$FiatTransactionPayload<ExtArgs>
        fields: Prisma.FiatTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiatTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiatTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          findFirst: {
            args: Prisma.FiatTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiatTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          findMany: {
            args: Prisma.FiatTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>[]
          }
          create: {
            args: Prisma.FiatTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          createMany: {
            args: Prisma.FiatTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FiatTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          update: {
            args: Prisma.FiatTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          deleteMany: {
            args: Prisma.FiatTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FiatTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FiatTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FiatTransactionPayload>
          }
          aggregate: {
            args: Prisma.FiatTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiatTransaction>
          }
          groupBy: {
            args: Prisma.FiatTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FiatTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiatTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<FiatTransactionCountAggregateOutputType> | number
          }
        }
      }
      CryptoTransaction: {
        payload: Prisma.$CryptoTransactionPayload<ExtArgs>
        fields: Prisma.CryptoTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptoTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptoTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          findFirst: {
            args: Prisma.CryptoTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptoTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          findMany: {
            args: Prisma.CryptoTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>[]
          }
          create: {
            args: Prisma.CryptoTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          createMany: {
            args: Prisma.CryptoTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CryptoTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          update: {
            args: Prisma.CryptoTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CryptoTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptoTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CryptoTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoTransactionPayload>
          }
          aggregate: {
            args: Prisma.CryptoTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCryptoTransaction>
          }
          groupBy: {
            args: Prisma.CryptoTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptoTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptoTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CryptoTransactionCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    wallet?: WalletOmit
    fiatTransaction?: FiatTransactionOmit
    cryptoTransaction?: CryptoTransactionOmit
    order?: OrderOmit
    trade?: TradeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    fiatTransactions: number
    wallets: number
    cryptoTransactions: number
    orders: number
    trades_as_buyer: number
    trades_as_seller: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fiatTransactions?: boolean | UserCountOutputTypeCountFiatTransactionsArgs
    wallets?: boolean | UserCountOutputTypeCountWalletsArgs
    cryptoTransactions?: boolean | UserCountOutputTypeCountCryptoTransactionsArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    trades_as_buyer?: boolean | UserCountOutputTypeCountTrades_as_buyerArgs
    trades_as_seller?: boolean | UserCountOutputTypeCountTrades_as_sellerArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFiatTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCryptoTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrades_as_buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTrades_as_sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    sent_txns: number
    received_txns: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sent_txns?: boolean | WalletCountOutputTypeCountSent_txnsArgs
    received_txns?: boolean | WalletCountOutputTypeCountReceived_txnsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountSent_txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoTransactionWhereInput
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountReceived_txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoTransactionWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    buy_trades: number
    sell_trades: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buy_trades?: boolean | OrderCountOutputTypeCountBuy_tradesArgs
    sell_trades?: boolean | OrderCountOutputTypeCountSell_tradesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountBuy_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountSell_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    userName: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    userName: number
    email: number
    password: number
    role: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    userName?: true
    email?: true
    password?: true
    role?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    userName: string | null
    email: string | null
    password: string
    role: $Enums.Role
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
    fiatTransactions?: boolean | User$fiatTransactionsArgs<ExtArgs>
    wallets?: boolean | User$walletsArgs<ExtArgs>
    cryptoTransactions?: boolean | User$cryptoTransactionsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    trades_as_buyer?: boolean | User$trades_as_buyerArgs<ExtArgs>
    trades_as_seller?: boolean | User$trades_as_sellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "userName" | "email" | "password" | "role" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fiatTransactions?: boolean | User$fiatTransactionsArgs<ExtArgs>
    wallets?: boolean | User$walletsArgs<ExtArgs>
    cryptoTransactions?: boolean | User$cryptoTransactionsArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    trades_as_buyer?: boolean | User$trades_as_buyerArgs<ExtArgs>
    trades_as_seller?: boolean | User$trades_as_sellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      fiatTransactions: Prisma.$FiatTransactionPayload<ExtArgs>[]
      wallets: Prisma.$WalletPayload<ExtArgs>[]
      cryptoTransactions: Prisma.$CryptoTransactionPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      trades_as_buyer: Prisma.$TradePayload<ExtArgs>[]
      trades_as_seller: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      userName: string | null
      email: string | null
      password: string
      role: $Enums.Role
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fiatTransactions<T extends User$fiatTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$fiatTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wallets<T extends User$walletsArgs<ExtArgs> = {}>(args?: Subset<T, User$walletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cryptoTransactions<T extends User$cryptoTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$cryptoTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades_as_buyer<T extends User$trades_as_buyerArgs<ExtArgs> = {}>(args?: Subset<T, User$trades_as_buyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trades_as_seller<T extends User$trades_as_sellerArgs<ExtArgs> = {}>(args?: Subset<T, User$trades_as_sellerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.fiatTransactions
   */
  export type User$fiatTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    where?: FiatTransactionWhereInput
    orderBy?: FiatTransactionOrderByWithRelationInput | FiatTransactionOrderByWithRelationInput[]
    cursor?: FiatTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiatTransactionScalarFieldEnum | FiatTransactionScalarFieldEnum[]
  }

  /**
   * User.wallets
   */
  export type User$walletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    cursor?: WalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.cryptoTransactions
   */
  export type User$cryptoTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    where?: CryptoTransactionWhereInput
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    cursor?: CryptoTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.trades_as_buyer
   */
  export type User$trades_as_buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * User.trades_as_seller
   */
  export type User$trades_as_sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: Decimal | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    balance: Decimal | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    currency_type: $Enums.CryptoCurrency | null
    balance: Decimal | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    currency_type: $Enums.CryptoCurrency | null
    balance: Decimal | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    user_id: number
    currency_type: number
    balance: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    user_id?: true
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    user_id?: true
    currency_type?: true
    balance?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    user_id?: true
    currency_type?: true
    balance?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    user_id?: true
    currency_type?: true
    balance?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    user_id: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    currency_type?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sent_txns?: boolean | Wallet$sent_txnsArgs<ExtArgs>
    received_txns?: boolean | Wallet$received_txnsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>



  export type WalletSelectScalar = {
    id?: boolean
    user_id?: boolean
    currency_type?: boolean
    balance?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "currency_type" | "balance", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sent_txns?: boolean | Wallet$sent_txnsArgs<ExtArgs>
    received_txns?: boolean | Wallet$received_txnsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sent_txns: Prisma.$CryptoTransactionPayload<ExtArgs>[]
      received_txns: Prisma.$CryptoTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      currency_type: $Enums.CryptoCurrency
      balance: Prisma.Decimal
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sent_txns<T extends Wallet$sent_txnsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$sent_txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    received_txns<T extends Wallet$received_txnsArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$received_txnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'Int'>
    readonly user_id: FieldRef<"Wallet", 'Int'>
    readonly currency_type: FieldRef<"Wallet", 'CryptoCurrency'>
    readonly balance: FieldRef<"Wallet", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.sent_txns
   */
  export type Wallet$sent_txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    where?: CryptoTransactionWhereInput
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    cursor?: CryptoTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * Wallet.received_txns
   */
  export type Wallet$received_txnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    where?: CryptoTransactionWhereInput
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    cursor?: CryptoTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model FiatTransaction
   */

  export type AggregateFiatTransaction = {
    _count: FiatTransactionCountAggregateOutputType | null
    _avg: FiatTransactionAvgAggregateOutputType | null
    _sum: FiatTransactionSumAggregateOutputType | null
    _min: FiatTransactionMinAggregateOutputType | null
    _max: FiatTransactionMaxAggregateOutputType | null
  }

  export type FiatTransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type FiatTransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type FiatTransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    currency: $Enums.FiatCurrency | null
    type: $Enums.FiatTransactionType | null
    timestamp: Date | null
  }

  export type FiatTransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    currency: $Enums.FiatCurrency | null
    type: $Enums.FiatTransactionType | null
    timestamp: Date | null
  }

  export type FiatTransactionCountAggregateOutputType = {
    id: number
    user_id: number
    amount: number
    currency: number
    type: number
    timestamp: number
    _all: number
  }


  export type FiatTransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type FiatTransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type FiatTransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    type?: true
    timestamp?: true
  }

  export type FiatTransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    type?: true
    timestamp?: true
  }

  export type FiatTransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    currency?: true
    type?: true
    timestamp?: true
    _all?: true
  }

  export type FiatTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatTransaction to aggregate.
     */
    where?: FiatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatTransactions to fetch.
     */
    orderBy?: FiatTransactionOrderByWithRelationInput | FiatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiatTransactions
    **/
    _count?: true | FiatTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiatTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiatTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiatTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiatTransactionMaxAggregateInputType
  }

  export type GetFiatTransactionAggregateType<T extends FiatTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateFiatTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiatTransaction[P]>
      : GetScalarType<T[P], AggregateFiatTransaction[P]>
  }




  export type FiatTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatTransactionWhereInput
    orderBy?: FiatTransactionOrderByWithAggregationInput | FiatTransactionOrderByWithAggregationInput[]
    by: FiatTransactionScalarFieldEnum[] | FiatTransactionScalarFieldEnum
    having?: FiatTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiatTransactionCountAggregateInputType | true
    _avg?: FiatTransactionAvgAggregateInputType
    _sum?: FiatTransactionSumAggregateInputType
    _min?: FiatTransactionMinAggregateInputType
    _max?: FiatTransactionMaxAggregateInputType
  }

  export type FiatTransactionGroupByOutputType = {
    id: number
    user_id: number
    amount: Decimal
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp: Date
    _count: FiatTransactionCountAggregateOutputType | null
    _avg: FiatTransactionAvgAggregateOutputType | null
    _sum: FiatTransactionSumAggregateOutputType | null
    _min: FiatTransactionMinAggregateOutputType | null
    _max: FiatTransactionMaxAggregateOutputType | null
  }

  type GetFiatTransactionGroupByPayload<T extends FiatTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiatTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiatTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiatTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], FiatTransactionGroupByOutputType[P]>
        }
      >
    >


  export type FiatTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiatTransaction"]>



  export type FiatTransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    amount?: boolean
    currency?: boolean
    type?: boolean
    timestamp?: boolean
  }

  export type FiatTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "amount" | "currency" | "type" | "timestamp", ExtArgs["result"]["fiatTransaction"]>
  export type FiatTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FiatTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiatTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      amount: Prisma.Decimal
      currency: $Enums.FiatCurrency
      type: $Enums.FiatTransactionType
      timestamp: Date
    }, ExtArgs["result"]["fiatTransaction"]>
    composites: {}
  }

  type FiatTransactionGetPayload<S extends boolean | null | undefined | FiatTransactionDefaultArgs> = $Result.GetResult<Prisma.$FiatTransactionPayload, S>

  type FiatTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FiatTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FiatTransactionCountAggregateInputType | true
    }

  export interface FiatTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiatTransaction'], meta: { name: 'FiatTransaction' } }
    /**
     * Find zero or one FiatTransaction that matches the filter.
     * @param {FiatTransactionFindUniqueArgs} args - Arguments to find a FiatTransaction
     * @example
     * // Get one FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FiatTransactionFindUniqueArgs>(args: SelectSubset<T, FiatTransactionFindUniqueArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FiatTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FiatTransactionFindUniqueOrThrowArgs} args - Arguments to find a FiatTransaction
     * @example
     * // Get one FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FiatTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, FiatTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiatTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionFindFirstArgs} args - Arguments to find a FiatTransaction
     * @example
     * // Get one FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FiatTransactionFindFirstArgs>(args?: SelectSubset<T, FiatTransactionFindFirstArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FiatTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionFindFirstOrThrowArgs} args - Arguments to find a FiatTransaction
     * @example
     * // Get one FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FiatTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, FiatTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FiatTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiatTransactions
     * const fiatTransactions = await prisma.fiatTransaction.findMany()
     * 
     * // Get first 10 FiatTransactions
     * const fiatTransactions = await prisma.fiatTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiatTransactionWithIdOnly = await prisma.fiatTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FiatTransactionFindManyArgs>(args?: SelectSubset<T, FiatTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FiatTransaction.
     * @param {FiatTransactionCreateArgs} args - Arguments to create a FiatTransaction.
     * @example
     * // Create one FiatTransaction
     * const FiatTransaction = await prisma.fiatTransaction.create({
     *   data: {
     *     // ... data to create a FiatTransaction
     *   }
     * })
     * 
     */
    create<T extends FiatTransactionCreateArgs>(args: SelectSubset<T, FiatTransactionCreateArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FiatTransactions.
     * @param {FiatTransactionCreateManyArgs} args - Arguments to create many FiatTransactions.
     * @example
     * // Create many FiatTransactions
     * const fiatTransaction = await prisma.fiatTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FiatTransactionCreateManyArgs>(args?: SelectSubset<T, FiatTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FiatTransaction.
     * @param {FiatTransactionDeleteArgs} args - Arguments to delete one FiatTransaction.
     * @example
     * // Delete one FiatTransaction
     * const FiatTransaction = await prisma.fiatTransaction.delete({
     *   where: {
     *     // ... filter to delete one FiatTransaction
     *   }
     * })
     * 
     */
    delete<T extends FiatTransactionDeleteArgs>(args: SelectSubset<T, FiatTransactionDeleteArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FiatTransaction.
     * @param {FiatTransactionUpdateArgs} args - Arguments to update one FiatTransaction.
     * @example
     * // Update one FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FiatTransactionUpdateArgs>(args: SelectSubset<T, FiatTransactionUpdateArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FiatTransactions.
     * @param {FiatTransactionDeleteManyArgs} args - Arguments to filter FiatTransactions to delete.
     * @example
     * // Delete a few FiatTransactions
     * const { count } = await prisma.fiatTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FiatTransactionDeleteManyArgs>(args?: SelectSubset<T, FiatTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiatTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiatTransactions
     * const fiatTransaction = await prisma.fiatTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FiatTransactionUpdateManyArgs>(args: SelectSubset<T, FiatTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FiatTransaction.
     * @param {FiatTransactionUpsertArgs} args - Arguments to update or create a FiatTransaction.
     * @example
     * // Update or create a FiatTransaction
     * const fiatTransaction = await prisma.fiatTransaction.upsert({
     *   create: {
     *     // ... data to create a FiatTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiatTransaction we want to update
     *   }
     * })
     */
    upsert<T extends FiatTransactionUpsertArgs>(args: SelectSubset<T, FiatTransactionUpsertArgs<ExtArgs>>): Prisma__FiatTransactionClient<$Result.GetResult<Prisma.$FiatTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FiatTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionCountArgs} args - Arguments to filter FiatTransactions to count.
     * @example
     * // Count the number of FiatTransactions
     * const count = await prisma.fiatTransaction.count({
     *   where: {
     *     // ... the filter for the FiatTransactions we want to count
     *   }
     * })
    **/
    count<T extends FiatTransactionCountArgs>(
      args?: Subset<T, FiatTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiatTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiatTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FiatTransactionAggregateArgs>(args: Subset<T, FiatTransactionAggregateArgs>): Prisma.PrismaPromise<GetFiatTransactionAggregateType<T>>

    /**
     * Group by FiatTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FiatTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiatTransactionGroupByArgs['orderBy'] }
        : { orderBy?: FiatTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FiatTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiatTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiatTransaction model
   */
  readonly fields: FiatTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiatTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiatTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FiatTransaction model
   */
  interface FiatTransactionFieldRefs {
    readonly id: FieldRef<"FiatTransaction", 'Int'>
    readonly user_id: FieldRef<"FiatTransaction", 'Int'>
    readonly amount: FieldRef<"FiatTransaction", 'Decimal'>
    readonly currency: FieldRef<"FiatTransaction", 'FiatCurrency'>
    readonly type: FieldRef<"FiatTransaction", 'FiatTransactionType'>
    readonly timestamp: FieldRef<"FiatTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FiatTransaction findUnique
   */
  export type FiatTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FiatTransaction to fetch.
     */
    where: FiatTransactionWhereUniqueInput
  }

  /**
   * FiatTransaction findUniqueOrThrow
   */
  export type FiatTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FiatTransaction to fetch.
     */
    where: FiatTransactionWhereUniqueInput
  }

  /**
   * FiatTransaction findFirst
   */
  export type FiatTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FiatTransaction to fetch.
     */
    where?: FiatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatTransactions to fetch.
     */
    orderBy?: FiatTransactionOrderByWithRelationInput | FiatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatTransactions.
     */
    cursor?: FiatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatTransactions.
     */
    distinct?: FiatTransactionScalarFieldEnum | FiatTransactionScalarFieldEnum[]
  }

  /**
   * FiatTransaction findFirstOrThrow
   */
  export type FiatTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FiatTransaction to fetch.
     */
    where?: FiatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatTransactions to fetch.
     */
    orderBy?: FiatTransactionOrderByWithRelationInput | FiatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatTransactions.
     */
    cursor?: FiatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatTransactions.
     */
    distinct?: FiatTransactionScalarFieldEnum | FiatTransactionScalarFieldEnum[]
  }

  /**
   * FiatTransaction findMany
   */
  export type FiatTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter, which FiatTransactions to fetch.
     */
    where?: FiatTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatTransactions to fetch.
     */
    orderBy?: FiatTransactionOrderByWithRelationInput | FiatTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiatTransactions.
     */
    cursor?: FiatTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatTransactions.
     */
    skip?: number
    distinct?: FiatTransactionScalarFieldEnum | FiatTransactionScalarFieldEnum[]
  }

  /**
   * FiatTransaction create
   */
  export type FiatTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a FiatTransaction.
     */
    data: XOR<FiatTransactionCreateInput, FiatTransactionUncheckedCreateInput>
  }

  /**
   * FiatTransaction createMany
   */
  export type FiatTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiatTransactions.
     */
    data: FiatTransactionCreateManyInput | FiatTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiatTransaction update
   */
  export type FiatTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a FiatTransaction.
     */
    data: XOR<FiatTransactionUpdateInput, FiatTransactionUncheckedUpdateInput>
    /**
     * Choose, which FiatTransaction to update.
     */
    where: FiatTransactionWhereUniqueInput
  }

  /**
   * FiatTransaction updateMany
   */
  export type FiatTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiatTransactions.
     */
    data: XOR<FiatTransactionUpdateManyMutationInput, FiatTransactionUncheckedUpdateManyInput>
    /**
     * Filter which FiatTransactions to update
     */
    where?: FiatTransactionWhereInput
    /**
     * Limit how many FiatTransactions to update.
     */
    limit?: number
  }

  /**
   * FiatTransaction upsert
   */
  export type FiatTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the FiatTransaction to update in case it exists.
     */
    where: FiatTransactionWhereUniqueInput
    /**
     * In case the FiatTransaction found by the `where` argument doesn't exist, create a new FiatTransaction with this data.
     */
    create: XOR<FiatTransactionCreateInput, FiatTransactionUncheckedCreateInput>
    /**
     * In case the FiatTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiatTransactionUpdateInput, FiatTransactionUncheckedUpdateInput>
  }

  /**
   * FiatTransaction delete
   */
  export type FiatTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
    /**
     * Filter which FiatTransaction to delete.
     */
    where: FiatTransactionWhereUniqueInput
  }

  /**
   * FiatTransaction deleteMany
   */
  export type FiatTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatTransactions to delete
     */
    where?: FiatTransactionWhereInput
    /**
     * Limit how many FiatTransactions to delete.
     */
    limit?: number
  }

  /**
   * FiatTransaction without action
   */
  export type FiatTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatTransaction
     */
    select?: FiatTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FiatTransaction
     */
    omit?: FiatTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatTransactionInclude<ExtArgs> | null
  }


  /**
   * Model CryptoTransaction
   */

  export type AggregateCryptoTransaction = {
    _count: CryptoTransactionCountAggregateOutputType | null
    _avg: CryptoTransactionAvgAggregateOutputType | null
    _sum: CryptoTransactionSumAggregateOutputType | null
    _min: CryptoTransactionMinAggregateOutputType | null
    _max: CryptoTransactionMaxAggregateOutputType | null
  }

  export type CryptoTransactionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    sender_wallet_id: number | null
    receiver_wallet_id: number | null
    amount: Decimal | null
  }

  export type CryptoTransactionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    sender_wallet_id: number | null
    receiver_wallet_id: number | null
    amount: Decimal | null
  }

  export type CryptoTransactionMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    sender_wallet_id: number | null
    receiver_wallet_id: number | null
    amount: Decimal | null
    crypto_type: $Enums.CryptoCurrency | null
    type: $Enums.CryptoTransactionType | null
    target_address: string | null
    timestamp: Date | null
  }

  export type CryptoTransactionMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    sender_wallet_id: number | null
    receiver_wallet_id: number | null
    amount: Decimal | null
    crypto_type: $Enums.CryptoCurrency | null
    type: $Enums.CryptoTransactionType | null
    target_address: string | null
    timestamp: Date | null
  }

  export type CryptoTransactionCountAggregateOutputType = {
    id: number
    user_id: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: number
    crypto_type: number
    type: number
    target_address: number
    timestamp: number
    _all: number
  }


  export type CryptoTransactionAvgAggregateInputType = {
    id?: true
    user_id?: true
    sender_wallet_id?: true
    receiver_wallet_id?: true
    amount?: true
  }

  export type CryptoTransactionSumAggregateInputType = {
    id?: true
    user_id?: true
    sender_wallet_id?: true
    receiver_wallet_id?: true
    amount?: true
  }

  export type CryptoTransactionMinAggregateInputType = {
    id?: true
    user_id?: true
    sender_wallet_id?: true
    receiver_wallet_id?: true
    amount?: true
    crypto_type?: true
    type?: true
    target_address?: true
    timestamp?: true
  }

  export type CryptoTransactionMaxAggregateInputType = {
    id?: true
    user_id?: true
    sender_wallet_id?: true
    receiver_wallet_id?: true
    amount?: true
    crypto_type?: true
    type?: true
    target_address?: true
    timestamp?: true
  }

  export type CryptoTransactionCountAggregateInputType = {
    id?: true
    user_id?: true
    sender_wallet_id?: true
    receiver_wallet_id?: true
    amount?: true
    crypto_type?: true
    type?: true
    target_address?: true
    timestamp?: true
    _all?: true
  }

  export type CryptoTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoTransaction to aggregate.
     */
    where?: CryptoTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoTransactions to fetch.
     */
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptoTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CryptoTransactions
    **/
    _count?: true | CryptoTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptoTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptoTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptoTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptoTransactionMaxAggregateInputType
  }

  export type GetCryptoTransactionAggregateType<T extends CryptoTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptoTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptoTransaction[P]>
      : GetScalarType<T[P], AggregateCryptoTransaction[P]>
  }




  export type CryptoTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoTransactionWhereInput
    orderBy?: CryptoTransactionOrderByWithAggregationInput | CryptoTransactionOrderByWithAggregationInput[]
    by: CryptoTransactionScalarFieldEnum[] | CryptoTransactionScalarFieldEnum
    having?: CryptoTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptoTransactionCountAggregateInputType | true
    _avg?: CryptoTransactionAvgAggregateInputType
    _sum?: CryptoTransactionSumAggregateInputType
    _min?: CryptoTransactionMinAggregateInputType
    _max?: CryptoTransactionMaxAggregateInputType
  }

  export type CryptoTransactionGroupByOutputType = {
    id: number
    user_id: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: Decimal
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address: string | null
    timestamp: Date
    _count: CryptoTransactionCountAggregateOutputType | null
    _avg: CryptoTransactionAvgAggregateOutputType | null
    _sum: CryptoTransactionSumAggregateOutputType | null
    _min: CryptoTransactionMinAggregateOutputType | null
    _max: CryptoTransactionMaxAggregateOutputType | null
  }

  type GetCryptoTransactionGroupByPayload<T extends CryptoTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptoTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptoTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptoTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CryptoTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CryptoTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sender_wallet_id?: boolean
    receiver_wallet_id?: boolean
    amount?: boolean
    crypto_type?: boolean
    type?: boolean
    target_address?: boolean
    timestamp?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender_wallet?: boolean | WalletDefaultArgs<ExtArgs>
    receiver_wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cryptoTransaction"]>



  export type CryptoTransactionSelectScalar = {
    id?: boolean
    user_id?: boolean
    sender_wallet_id?: boolean
    receiver_wallet_id?: boolean
    amount?: boolean
    crypto_type?: boolean
    type?: boolean
    target_address?: boolean
    timestamp?: boolean
  }

  export type CryptoTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "sender_wallet_id" | "receiver_wallet_id" | "amount" | "crypto_type" | "type" | "target_address" | "timestamp", ExtArgs["result"]["cryptoTransaction"]>
  export type CryptoTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sender_wallet?: boolean | WalletDefaultArgs<ExtArgs>
    receiver_wallet?: boolean | WalletDefaultArgs<ExtArgs>
  }

  export type $CryptoTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CryptoTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sender_wallet: Prisma.$WalletPayload<ExtArgs>
      receiver_wallet: Prisma.$WalletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      sender_wallet_id: number
      receiver_wallet_id: number
      amount: Prisma.Decimal
      crypto_type: $Enums.CryptoCurrency
      type: $Enums.CryptoTransactionType
      target_address: string | null
      timestamp: Date
    }, ExtArgs["result"]["cryptoTransaction"]>
    composites: {}
  }

  type CryptoTransactionGetPayload<S extends boolean | null | undefined | CryptoTransactionDefaultArgs> = $Result.GetResult<Prisma.$CryptoTransactionPayload, S>

  type CryptoTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptoTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptoTransactionCountAggregateInputType | true
    }

  export interface CryptoTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CryptoTransaction'], meta: { name: 'CryptoTransaction' } }
    /**
     * Find zero or one CryptoTransaction that matches the filter.
     * @param {CryptoTransactionFindUniqueArgs} args - Arguments to find a CryptoTransaction
     * @example
     * // Get one CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptoTransactionFindUniqueArgs>(args: SelectSubset<T, CryptoTransactionFindUniqueArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CryptoTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptoTransactionFindUniqueOrThrowArgs} args - Arguments to find a CryptoTransaction
     * @example
     * // Get one CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptoTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptoTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionFindFirstArgs} args - Arguments to find a CryptoTransaction
     * @example
     * // Get one CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptoTransactionFindFirstArgs>(args?: SelectSubset<T, CryptoTransactionFindFirstArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CryptoTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionFindFirstOrThrowArgs} args - Arguments to find a CryptoTransaction
     * @example
     * // Get one CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptoTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptoTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CryptoTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CryptoTransactions
     * const cryptoTransactions = await prisma.cryptoTransaction.findMany()
     * 
     * // Get first 10 CryptoTransactions
     * const cryptoTransactions = await prisma.cryptoTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptoTransactionWithIdOnly = await prisma.cryptoTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CryptoTransactionFindManyArgs>(args?: SelectSubset<T, CryptoTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CryptoTransaction.
     * @param {CryptoTransactionCreateArgs} args - Arguments to create a CryptoTransaction.
     * @example
     * // Create one CryptoTransaction
     * const CryptoTransaction = await prisma.cryptoTransaction.create({
     *   data: {
     *     // ... data to create a CryptoTransaction
     *   }
     * })
     * 
     */
    create<T extends CryptoTransactionCreateArgs>(args: SelectSubset<T, CryptoTransactionCreateArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CryptoTransactions.
     * @param {CryptoTransactionCreateManyArgs} args - Arguments to create many CryptoTransactions.
     * @example
     * // Create many CryptoTransactions
     * const cryptoTransaction = await prisma.cryptoTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptoTransactionCreateManyArgs>(args?: SelectSubset<T, CryptoTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CryptoTransaction.
     * @param {CryptoTransactionDeleteArgs} args - Arguments to delete one CryptoTransaction.
     * @example
     * // Delete one CryptoTransaction
     * const CryptoTransaction = await prisma.cryptoTransaction.delete({
     *   where: {
     *     // ... filter to delete one CryptoTransaction
     *   }
     * })
     * 
     */
    delete<T extends CryptoTransactionDeleteArgs>(args: SelectSubset<T, CryptoTransactionDeleteArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CryptoTransaction.
     * @param {CryptoTransactionUpdateArgs} args - Arguments to update one CryptoTransaction.
     * @example
     * // Update one CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptoTransactionUpdateArgs>(args: SelectSubset<T, CryptoTransactionUpdateArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CryptoTransactions.
     * @param {CryptoTransactionDeleteManyArgs} args - Arguments to filter CryptoTransactions to delete.
     * @example
     * // Delete a few CryptoTransactions
     * const { count } = await prisma.cryptoTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptoTransactionDeleteManyArgs>(args?: SelectSubset<T, CryptoTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CryptoTransactions
     * const cryptoTransaction = await prisma.cryptoTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptoTransactionUpdateManyArgs>(args: SelectSubset<T, CryptoTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CryptoTransaction.
     * @param {CryptoTransactionUpsertArgs} args - Arguments to update or create a CryptoTransaction.
     * @example
     * // Update or create a CryptoTransaction
     * const cryptoTransaction = await prisma.cryptoTransaction.upsert({
     *   create: {
     *     // ... data to create a CryptoTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CryptoTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CryptoTransactionUpsertArgs>(args: SelectSubset<T, CryptoTransactionUpsertArgs<ExtArgs>>): Prisma__CryptoTransactionClient<$Result.GetResult<Prisma.$CryptoTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CryptoTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionCountArgs} args - Arguments to filter CryptoTransactions to count.
     * @example
     * // Count the number of CryptoTransactions
     * const count = await prisma.cryptoTransaction.count({
     *   where: {
     *     // ... the filter for the CryptoTransactions we want to count
     *   }
     * })
    **/
    count<T extends CryptoTransactionCountArgs>(
      args?: Subset<T, CryptoTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptoTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CryptoTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CryptoTransactionAggregateArgs>(args: Subset<T, CryptoTransactionAggregateArgs>): Prisma.PrismaPromise<GetCryptoTransactionAggregateType<T>>

    /**
     * Group by CryptoTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CryptoTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptoTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CryptoTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CryptoTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptoTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CryptoTransaction model
   */
  readonly fields: CryptoTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CryptoTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptoTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender_wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver_wallet<T extends WalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WalletDefaultArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CryptoTransaction model
   */
  interface CryptoTransactionFieldRefs {
    readonly id: FieldRef<"CryptoTransaction", 'Int'>
    readonly user_id: FieldRef<"CryptoTransaction", 'Int'>
    readonly sender_wallet_id: FieldRef<"CryptoTransaction", 'Int'>
    readonly receiver_wallet_id: FieldRef<"CryptoTransaction", 'Int'>
    readonly amount: FieldRef<"CryptoTransaction", 'Decimal'>
    readonly crypto_type: FieldRef<"CryptoTransaction", 'CryptoCurrency'>
    readonly type: FieldRef<"CryptoTransaction", 'CryptoTransactionType'>
    readonly target_address: FieldRef<"CryptoTransaction", 'String'>
    readonly timestamp: FieldRef<"CryptoTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CryptoTransaction findUnique
   */
  export type CryptoTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CryptoTransaction to fetch.
     */
    where: CryptoTransactionWhereUniqueInput
  }

  /**
   * CryptoTransaction findUniqueOrThrow
   */
  export type CryptoTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CryptoTransaction to fetch.
     */
    where: CryptoTransactionWhereUniqueInput
  }

  /**
   * CryptoTransaction findFirst
   */
  export type CryptoTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CryptoTransaction to fetch.
     */
    where?: CryptoTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoTransactions to fetch.
     */
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoTransactions.
     */
    cursor?: CryptoTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoTransactions.
     */
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * CryptoTransaction findFirstOrThrow
   */
  export type CryptoTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CryptoTransaction to fetch.
     */
    where?: CryptoTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoTransactions to fetch.
     */
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoTransactions.
     */
    cursor?: CryptoTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoTransactions.
     */
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * CryptoTransaction findMany
   */
  export type CryptoTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter, which CryptoTransactions to fetch.
     */
    where?: CryptoTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoTransactions to fetch.
     */
    orderBy?: CryptoTransactionOrderByWithRelationInput | CryptoTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CryptoTransactions.
     */
    cursor?: CryptoTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoTransactions.
     */
    skip?: number
    distinct?: CryptoTransactionScalarFieldEnum | CryptoTransactionScalarFieldEnum[]
  }

  /**
   * CryptoTransaction create
   */
  export type CryptoTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a CryptoTransaction.
     */
    data: XOR<CryptoTransactionCreateInput, CryptoTransactionUncheckedCreateInput>
  }

  /**
   * CryptoTransaction createMany
   */
  export type CryptoTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CryptoTransactions.
     */
    data: CryptoTransactionCreateManyInput | CryptoTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CryptoTransaction update
   */
  export type CryptoTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a CryptoTransaction.
     */
    data: XOR<CryptoTransactionUpdateInput, CryptoTransactionUncheckedUpdateInput>
    /**
     * Choose, which CryptoTransaction to update.
     */
    where: CryptoTransactionWhereUniqueInput
  }

  /**
   * CryptoTransaction updateMany
   */
  export type CryptoTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CryptoTransactions.
     */
    data: XOR<CryptoTransactionUpdateManyMutationInput, CryptoTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CryptoTransactions to update
     */
    where?: CryptoTransactionWhereInput
    /**
     * Limit how many CryptoTransactions to update.
     */
    limit?: number
  }

  /**
   * CryptoTransaction upsert
   */
  export type CryptoTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the CryptoTransaction to update in case it exists.
     */
    where: CryptoTransactionWhereUniqueInput
    /**
     * In case the CryptoTransaction found by the `where` argument doesn't exist, create a new CryptoTransaction with this data.
     */
    create: XOR<CryptoTransactionCreateInput, CryptoTransactionUncheckedCreateInput>
    /**
     * In case the CryptoTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptoTransactionUpdateInput, CryptoTransactionUncheckedUpdateInput>
  }

  /**
   * CryptoTransaction delete
   */
  export type CryptoTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
    /**
     * Filter which CryptoTransaction to delete.
     */
    where: CryptoTransactionWhereUniqueInput
  }

  /**
   * CryptoTransaction deleteMany
   */
  export type CryptoTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoTransactions to delete
     */
    where?: CryptoTransactionWhereInput
    /**
     * Limit how many CryptoTransactions to delete.
     */
    limit?: number
  }

  /**
   * CryptoTransaction without action
   */
  export type CryptoTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoTransaction
     */
    select?: CryptoTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CryptoTransaction
     */
    omit?: CryptoTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    type: $Enums.OrderType | null
    crypto_type: $Enums.CryptoCurrency | null
    amount: Decimal | null
    price_per_unit: Decimal | null
    status: $Enums.OrderStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    type: $Enums.OrderType | null
    crypto_type: $Enums.CryptoCurrency | null
    amount: Decimal | null
    price_per_unit: Decimal | null
    status: $Enums.OrderStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    user_id: number
    type: number
    crypto_type: number
    amount: number
    price_per_unit: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    price_per_unit?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
    price_per_unit?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    crypto_type?: true
    amount?: true
    price_per_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    crypto_type?: true
    amount?: true
    price_per_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    user_id?: true
    type?: true
    crypto_type?: true
    amount?: true
    price_per_unit?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    user_id: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal
    price_per_unit: Decimal
    status: $Enums.OrderStatus
    created_at: Date
    updated_at: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    type?: boolean
    crypto_type?: boolean
    amount?: boolean
    price_per_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    buy_trades?: boolean | Order$buy_tradesArgs<ExtArgs>
    sell_trades?: boolean | Order$sell_tradesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    user_id?: boolean
    type?: boolean
    crypto_type?: boolean
    amount?: boolean
    price_per_unit?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "type" | "crypto_type" | "amount" | "price_per_unit" | "status" | "created_at" | "updated_at", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    buy_trades?: boolean | Order$buy_tradesArgs<ExtArgs>
    sell_trades?: boolean | Order$sell_tradesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      buy_trades: Prisma.$TradePayload<ExtArgs>[]
      sell_trades: Prisma.$TradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      type: $Enums.OrderType
      crypto_type: $Enums.CryptoCurrency
      amount: Prisma.Decimal
      price_per_unit: Prisma.Decimal
      status: $Enums.OrderStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buy_trades<T extends Order$buy_tradesArgs<ExtArgs> = {}>(args?: Subset<T, Order$buy_tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sell_trades<T extends Order$sell_tradesArgs<ExtArgs> = {}>(args?: Subset<T, Order$sell_tradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly user_id: FieldRef<"Order", 'Int'>
    readonly type: FieldRef<"Order", 'OrderType'>
    readonly crypto_type: FieldRef<"Order", 'CryptoCurrency'>
    readonly amount: FieldRef<"Order", 'Decimal'>
    readonly price_per_unit: FieldRef<"Order", 'Decimal'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.buy_trades
   */
  export type Order$buy_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Order.sell_trades
   */
  export type Order$sell_tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    cursor?: TradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeAvgAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    seller_id: number | null
    buy_order_id: number | null
    sell_order_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
  }

  export type TradeSumAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    seller_id: number | null
    buy_order_id: number | null
    sell_order_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
  }

  export type TradeMinAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    seller_id: number | null
    buy_order_id: number | null
    sell_order_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
    executed_at: Date | null
    updated_at: Date | null
  }

  export type TradeMaxAggregateOutputType = {
    id: number | null
    buyer_id: number | null
    seller_id: number | null
    buy_order_id: number | null
    sell_order_id: number | null
    amount: Decimal | null
    price_per_unit: Decimal | null
    executed_at: Date | null
    updated_at: Date | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: number
    price_per_unit: number
    executed_at: number
    updated_at: number
    _all: number
  }


  export type TradeAvgAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    buy_order_id?: true
    sell_order_id?: true
    amount?: true
    price_per_unit?: true
  }

  export type TradeSumAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    buy_order_id?: true
    sell_order_id?: true
    amount?: true
    price_per_unit?: true
  }

  export type TradeMinAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    buy_order_id?: true
    sell_order_id?: true
    amount?: true
    price_per_unit?: true
    executed_at?: true
    updated_at?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    buy_order_id?: true
    sell_order_id?: true
    amount?: true
    price_per_unit?: true
    executed_at?: true
    updated_at?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    buy_order_id?: true
    sell_order_id?: true
    amount?: true
    price_per_unit?: true
    executed_at?: true
    updated_at?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _avg?: TradeAvgAggregateInputType
    _sum?: TradeSumAggregateInputType
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal
    price_per_unit: Decimal
    executed_at: Date
    updated_at: Date
    _count: TradeCountAggregateOutputType | null
    _avg: TradeAvgAggregateOutputType | null
    _sum: TradeSumAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    buy_order_id?: boolean
    sell_order_id?: boolean
    amount?: boolean
    price_per_unit?: boolean
    executed_at?: boolean
    updated_at?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buy_order?: boolean | OrderDefaultArgs<ExtArgs>
    sell_order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>



  export type TradeSelectScalar = {
    id?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    buy_order_id?: boolean
    sell_order_id?: boolean
    amount?: boolean
    price_per_unit?: boolean
    executed_at?: boolean
    updated_at?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buyer_id" | "seller_id" | "buy_order_id" | "sell_order_id" | "amount" | "price_per_unit" | "executed_at" | "updated_at", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    buy_order?: boolean | OrderDefaultArgs<ExtArgs>
    sell_order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      buyer: Prisma.$UserPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      buy_order: Prisma.$OrderPayload<ExtArgs>
      sell_order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      buyer_id: number
      seller_id: number
      buy_order_id: number
      sell_order_id: number
      amount: Prisma.Decimal
      price_per_unit: Prisma.Decimal
      executed_at: Date
      updated_at: Date
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buy_order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sell_order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'Int'>
    readonly buyer_id: FieldRef<"Trade", 'Int'>
    readonly seller_id: FieldRef<"Trade", 'Int'>
    readonly buy_order_id: FieldRef<"Trade", 'Int'>
    readonly sell_order_id: FieldRef<"Trade", 'Int'>
    readonly amount: FieldRef<"Trade", 'Decimal'>
    readonly price_per_unit: FieldRef<"Trade", 'Decimal'>
    readonly executed_at: FieldRef<"Trade", 'DateTime'>
    readonly updated_at: FieldRef<"Trade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    email: 'email',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    currency_type: 'currency_type',
    balance: 'balance'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const FiatTransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    amount: 'amount',
    currency: 'currency',
    type: 'type',
    timestamp: 'timestamp'
  };

  export type FiatTransactionScalarFieldEnum = (typeof FiatTransactionScalarFieldEnum)[keyof typeof FiatTransactionScalarFieldEnum]


  export const CryptoTransactionScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sender_wallet_id: 'sender_wallet_id',
    receiver_wallet_id: 'receiver_wallet_id',
    amount: 'amount',
    crypto_type: 'crypto_type',
    type: 'type',
    target_address: 'target_address',
    timestamp: 'timestamp'
  };

  export type CryptoTransactionScalarFieldEnum = (typeof CryptoTransactionScalarFieldEnum)[keyof typeof CryptoTransactionScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    crypto_type: 'crypto_type',
    amount: 'amount',
    price_per_unit: 'price_per_unit',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    buyer_id: 'buyer_id',
    seller_id: 'seller_id',
    buy_order_id: 'buy_order_id',
    sell_order_id: 'sell_order_id',
    amount: 'amount',
    price_per_unit: 'price_per_unit',
    executed_at: 'executed_at',
    updated_at: 'updated_at'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    userName: 'userName',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CryptoTransactionOrderByRelevanceFieldEnum: {
    target_address: 'target_address'
  };

  export type CryptoTransactionOrderByRelevanceFieldEnum = (typeof CryptoTransactionOrderByRelevanceFieldEnum)[keyof typeof CryptoTransactionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'CryptoCurrency'
   */
  export type EnumCryptoCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoCurrency'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'FiatCurrency'
   */
  export type EnumFiatCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FiatCurrency'>
    


  /**
   * Reference to a field of type 'FiatTransactionType'
   */
  export type EnumFiatTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FiatTransactionType'>
    


  /**
   * Reference to a field of type 'CryptoTransactionType'
   */
  export type EnumCryptoTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoTransactionType'>
    


  /**
   * Reference to a field of type 'OrderType'
   */
  export type EnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    userName?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    fiatTransactions?: FiatTransactionListRelationFilter
    wallets?: WalletListRelationFilter
    cryptoTransactions?: CryptoTransactionListRelationFilter
    orders?: OrderListRelationFilter
    trades_as_buyer?: TradeListRelationFilter
    trades_as_seller?: TradeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    fiatTransactions?: FiatTransactionOrderByRelationAggregateInput
    wallets?: WalletOrderByRelationAggregateInput
    cryptoTransactions?: CryptoTransactionOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    trades_as_buyer?: TradeOrderByRelationAggregateInput
    trades_as_seller?: TradeOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    fiatTransactions?: FiatTransactionListRelationFilter
    wallets?: WalletListRelationFilter
    cryptoTransactions?: CryptoTransactionListRelationFilter
    orders?: OrderListRelationFilter
    trades_as_buyer?: TradeListRelationFilter
    trades_as_seller?: TradeListRelationFilter
  }, "id" | "userName" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    userName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    currency_type?: EnumCryptoCurrencyFilter<"Wallet"> | $Enums.CryptoCurrency
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sent_txns?: CryptoTransactionListRelationFilter
    received_txns?: CryptoTransactionListRelationFilter
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    currency_type?: SortOrder
    balance?: SortOrder
    user?: UserOrderByWithRelationInput
    sent_txns?: CryptoTransactionOrderByRelationAggregateInput
    received_txns?: CryptoTransactionOrderByRelationAggregateInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    user_id?: IntFilter<"Wallet"> | number
    currency_type?: EnumCryptoCurrencyFilter<"Wallet"> | $Enums.CryptoCurrency
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sent_txns?: CryptoTransactionListRelationFilter
    received_txns?: CryptoTransactionListRelationFilter
  }, "id">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    currency_type?: SortOrder
    balance?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wallet"> | number
    user_id?: IntWithAggregatesFilter<"Wallet"> | number
    currency_type?: EnumCryptoCurrencyWithAggregatesFilter<"Wallet"> | $Enums.CryptoCurrency
    balance?: DecimalWithAggregatesFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
  }

  export type FiatTransactionWhereInput = {
    AND?: FiatTransactionWhereInput | FiatTransactionWhereInput[]
    OR?: FiatTransactionWhereInput[]
    NOT?: FiatTransactionWhereInput | FiatTransactionWhereInput[]
    id?: IntFilter<"FiatTransaction"> | number
    user_id?: IntFilter<"FiatTransaction"> | number
    amount?: DecimalFilter<"FiatTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFilter<"FiatTransaction"> | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFilter<"FiatTransaction"> | $Enums.FiatTransactionType
    timestamp?: DateTimeFilter<"FiatTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FiatTransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FiatTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FiatTransactionWhereInput | FiatTransactionWhereInput[]
    OR?: FiatTransactionWhereInput[]
    NOT?: FiatTransactionWhereInput | FiatTransactionWhereInput[]
    user_id?: IntFilter<"FiatTransaction"> | number
    amount?: DecimalFilter<"FiatTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFilter<"FiatTransaction"> | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFilter<"FiatTransaction"> | $Enums.FiatTransactionType
    timestamp?: DateTimeFilter<"FiatTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FiatTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
    _count?: FiatTransactionCountOrderByAggregateInput
    _avg?: FiatTransactionAvgOrderByAggregateInput
    _max?: FiatTransactionMaxOrderByAggregateInput
    _min?: FiatTransactionMinOrderByAggregateInput
    _sum?: FiatTransactionSumOrderByAggregateInput
  }

  export type FiatTransactionScalarWhereWithAggregatesInput = {
    AND?: FiatTransactionScalarWhereWithAggregatesInput | FiatTransactionScalarWhereWithAggregatesInput[]
    OR?: FiatTransactionScalarWhereWithAggregatesInput[]
    NOT?: FiatTransactionScalarWhereWithAggregatesInput | FiatTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FiatTransaction"> | number
    user_id?: IntWithAggregatesFilter<"FiatTransaction"> | number
    amount?: DecimalWithAggregatesFilter<"FiatTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyWithAggregatesFilter<"FiatTransaction"> | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeWithAggregatesFilter<"FiatTransaction"> | $Enums.FiatTransactionType
    timestamp?: DateTimeWithAggregatesFilter<"FiatTransaction"> | Date | string
  }

  export type CryptoTransactionWhereInput = {
    AND?: CryptoTransactionWhereInput | CryptoTransactionWhereInput[]
    OR?: CryptoTransactionWhereInput[]
    NOT?: CryptoTransactionWhereInput | CryptoTransactionWhereInput[]
    id?: IntFilter<"CryptoTransaction"> | number
    user_id?: IntFilter<"CryptoTransaction"> | number
    sender_wallet_id?: IntFilter<"CryptoTransaction"> | number
    receiver_wallet_id?: IntFilter<"CryptoTransaction"> | number
    amount?: DecimalFilter<"CryptoTransaction"> | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFilter<"CryptoTransaction"> | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFilter<"CryptoTransaction"> | $Enums.CryptoTransactionType
    target_address?: StringNullableFilter<"CryptoTransaction"> | string | null
    timestamp?: DateTimeFilter<"CryptoTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender_wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    receiver_wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }

  export type CryptoTransactionOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
    crypto_type?: SortOrder
    type?: SortOrder
    target_address?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    user?: UserOrderByWithRelationInput
    sender_wallet?: WalletOrderByWithRelationInput
    receiver_wallet?: WalletOrderByWithRelationInput
    _relevance?: CryptoTransactionOrderByRelevanceInput
  }

  export type CryptoTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CryptoTransactionWhereInput | CryptoTransactionWhereInput[]
    OR?: CryptoTransactionWhereInput[]
    NOT?: CryptoTransactionWhereInput | CryptoTransactionWhereInput[]
    user_id?: IntFilter<"CryptoTransaction"> | number
    sender_wallet_id?: IntFilter<"CryptoTransaction"> | number
    receiver_wallet_id?: IntFilter<"CryptoTransaction"> | number
    amount?: DecimalFilter<"CryptoTransaction"> | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFilter<"CryptoTransaction"> | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFilter<"CryptoTransaction"> | $Enums.CryptoTransactionType
    target_address?: StringNullableFilter<"CryptoTransaction"> | string | null
    timestamp?: DateTimeFilter<"CryptoTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender_wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
    receiver_wallet?: XOR<WalletScalarRelationFilter, WalletWhereInput>
  }, "id">

  export type CryptoTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
    crypto_type?: SortOrder
    type?: SortOrder
    target_address?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: CryptoTransactionCountOrderByAggregateInput
    _avg?: CryptoTransactionAvgOrderByAggregateInput
    _max?: CryptoTransactionMaxOrderByAggregateInput
    _min?: CryptoTransactionMinOrderByAggregateInput
    _sum?: CryptoTransactionSumOrderByAggregateInput
  }

  export type CryptoTransactionScalarWhereWithAggregatesInput = {
    AND?: CryptoTransactionScalarWhereWithAggregatesInput | CryptoTransactionScalarWhereWithAggregatesInput[]
    OR?: CryptoTransactionScalarWhereWithAggregatesInput[]
    NOT?: CryptoTransactionScalarWhereWithAggregatesInput | CryptoTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CryptoTransaction"> | number
    user_id?: IntWithAggregatesFilter<"CryptoTransaction"> | number
    sender_wallet_id?: IntWithAggregatesFilter<"CryptoTransaction"> | number
    receiver_wallet_id?: IntWithAggregatesFilter<"CryptoTransaction"> | number
    amount?: DecimalWithAggregatesFilter<"CryptoTransaction"> | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyWithAggregatesFilter<"CryptoTransaction"> | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeWithAggregatesFilter<"CryptoTransaction"> | $Enums.CryptoTransactionType
    target_address?: StringNullableWithAggregatesFilter<"CryptoTransaction"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"CryptoTransaction"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    type?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFilter<"Order"> | $Enums.CryptoCurrency
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buy_trades?: TradeListRelationFilter
    sell_trades?: TradeListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    crypto_type?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    buy_trades?: TradeOrderByRelationAggregateInput
    sell_trades?: TradeOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    user_id?: IntFilter<"Order"> | number
    type?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFilter<"Order"> | $Enums.CryptoCurrency
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    buy_trades?: TradeListRelationFilter
    sell_trades?: TradeListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    crypto_type?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    user_id?: IntWithAggregatesFilter<"Order"> | number
    type?: EnumOrderTypeWithAggregatesFilter<"Order"> | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyWithAggregatesFilter<"Order"> | $Enums.CryptoCurrency
    amount?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: IntFilter<"Trade"> | number
    buyer_id?: IntFilter<"Trade"> | number
    seller_id?: IntFilter<"Trade"> | number
    buy_order_id?: IntFilter<"Trade"> | number
    sell_order_id?: IntFilter<"Trade"> | number
    amount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFilter<"Trade"> | Date | string
    updated_at?: DateTimeFilter<"Trade"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    buy_order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    sell_order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    executed_at?: SortOrder
    updated_at?: SortOrder
    buyer?: UserOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    buy_order?: OrderOrderByWithRelationInput
    sell_order?: OrderOrderByWithRelationInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    buyer_id?: IntFilter<"Trade"> | number
    seller_id?: IntFilter<"Trade"> | number
    buy_order_id?: IntFilter<"Trade"> | number
    sell_order_id?: IntFilter<"Trade"> | number
    amount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFilter<"Trade"> | Date | string
    updated_at?: DateTimeFilter<"Trade"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    buy_order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    sell_order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    executed_at?: SortOrder
    updated_at?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _avg?: TradeAvgOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
    _sum?: TradeSumOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trade"> | number
    buyer_id?: IntWithAggregatesFilter<"Trade"> | number
    seller_id?: IntWithAggregatesFilter<"Trade"> | number
    buy_order_id?: IntWithAggregatesFilter<"Trade"> | number
    sell_order_id?: IntWithAggregatesFilter<"Trade"> | number
    amount?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalWithAggregatesFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Trade"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    wallets?: WalletCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    wallets?: WalletUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutWalletsInput
    sent_txns?: CryptoTransactionCreateNestedManyWithoutSender_walletInput
    received_txns?: CryptoTransactionCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    user_id: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutSender_walletInput
    received_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletUpdateInput = {
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    sent_txns?: CryptoTransactionUpdateManyWithoutSender_walletNestedInput
    received_txns?: CryptoTransactionUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedUpdateManyWithoutSender_walletNestedInput
    received_txns?: CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletCreateManyInput = {
    id?: number
    user_id: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
  }

  export type WalletUpdateManyMutationInput = {
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FiatTransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutFiatTransactionsInput
  }

  export type FiatTransactionUncheckedCreateInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
  }

  export type FiatTransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFiatTransactionsNestedInput
  }

  export type FiatTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatTransactionCreateManyInput = {
    id?: number
    user_id: number
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
  }

  export type FiatTransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCryptoTransactionsInput
    sender_wallet: WalletCreateNestedOneWithoutSent_txnsInput
    receiver_wallet: WalletCreateNestedOneWithoutReceived_txnsInput
  }

  export type CryptoTransactionUncheckedCreateInput = {
    id?: number
    user_id: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCryptoTransactionsNestedInput
    sender_wallet?: WalletUpdateOneRequiredWithoutSent_txnsNestedInput
    receiver_wallet?: WalletUpdateOneRequiredWithoutReceived_txnsNestedInput
  }

  export type CryptoTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionCreateManyInput = {
    id?: number
    user_id: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    buy_trades?: TradeCreateNestedManyWithoutBuy_orderInput
    sell_trades?: TradeCreateNestedManyWithoutSell_orderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    user_id: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    buy_trades?: TradeUncheckedCreateNestedManyWithoutBuy_orderInput
    sell_trades?: TradeUncheckedCreateNestedManyWithoutSell_orderInput
  }

  export type OrderUpdateInput = {
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    buy_trades?: TradeUpdateManyWithoutBuy_orderNestedInput
    sell_trades?: TradeUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buy_trades?: TradeUncheckedUpdateManyWithoutBuy_orderNestedInput
    sell_trades?: TradeUncheckedUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    user_id: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
    buyer: UserCreateNestedOneWithoutTrades_as_buyerInput
    seller: UserCreateNestedOneWithoutTrades_as_sellerInput
    buy_order: OrderCreateNestedOneWithoutBuy_tradesInput
    sell_order: OrderCreateNestedOneWithoutSell_tradesInput
  }

  export type TradeUncheckedCreateInput = {
    id?: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTrades_as_buyerNestedInput
    seller?: UserUpdateOneRequiredWithoutTrades_as_sellerNestedInput
    buy_order?: OrderUpdateOneRequiredWithoutBuy_tradesNestedInput
    sell_order?: OrderUpdateOneRequiredWithoutSell_tradesNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyInput = {
    id?: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FiatTransactionListRelationFilter = {
    every?: FiatTransactionWhereInput
    some?: FiatTransactionWhereInput
    none?: FiatTransactionWhereInput
  }

  export type WalletListRelationFilter = {
    every?: WalletWhereInput
    some?: WalletWhereInput
    none?: WalletWhereInput
  }

  export type CryptoTransactionListRelationFilter = {
    every?: CryptoTransactionWhereInput
    some?: CryptoTransactionWhereInput
    none?: CryptoTransactionWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type TradeListRelationFilter = {
    every?: TradeWhereInput
    some?: TradeWhereInput
    none?: TradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FiatTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CryptoTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCryptoCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[]
    notIn?: $Enums.CryptoCurrency[]
    not?: NestedEnumCryptoCurrencyFilter<$PrismaModel> | $Enums.CryptoCurrency
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    currency_type?: SortOrder
    balance?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    currency_type?: SortOrder
    balance?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    currency_type?: SortOrder
    balance?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    balance?: SortOrder
  }

  export type EnumCryptoCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[]
    notIn?: $Enums.CryptoCurrency[]
    not?: NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.CryptoCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumFiatCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatCurrency | EnumFiatCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.FiatCurrency[]
    notIn?: $Enums.FiatCurrency[]
    not?: NestedEnumFiatCurrencyFilter<$PrismaModel> | $Enums.FiatCurrency
  }

  export type EnumFiatTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatTransactionType | EnumFiatTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FiatTransactionType[]
    notIn?: $Enums.FiatTransactionType[]
    not?: NestedEnumFiatTransactionTypeFilter<$PrismaModel> | $Enums.FiatTransactionType
  }

  export type FiatTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type FiatTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type FiatTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type FiatTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    timestamp?: SortOrder
  }

  export type FiatTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumFiatCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatCurrency | EnumFiatCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.FiatCurrency[]
    notIn?: $Enums.FiatCurrency[]
    not?: NestedEnumFiatCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.FiatCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFiatCurrencyFilter<$PrismaModel>
    _max?: NestedEnumFiatCurrencyFilter<$PrismaModel>
  }

  export type EnumFiatTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatTransactionType | EnumFiatTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FiatTransactionType[]
    notIn?: $Enums.FiatTransactionType[]
    not?: NestedEnumFiatTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.FiatTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFiatTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumFiatTransactionTypeFilter<$PrismaModel>
  }

  export type EnumCryptoTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoTransactionType | EnumCryptoTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoTransactionType[]
    notIn?: $Enums.CryptoTransactionType[]
    not?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel> | $Enums.CryptoTransactionType
  }

  export type WalletScalarRelationFilter = {
    is?: WalletWhereInput
    isNot?: WalletWhereInput
  }

  export type CryptoTransactionOrderByRelevanceInput = {
    fields: CryptoTransactionOrderByRelevanceFieldEnum | CryptoTransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CryptoTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
    crypto_type?: SortOrder
    type?: SortOrder
    target_address?: SortOrder
    timestamp?: SortOrder
  }

  export type CryptoTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
  }

  export type CryptoTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
    crypto_type?: SortOrder
    type?: SortOrder
    target_address?: SortOrder
    timestamp?: SortOrder
  }

  export type CryptoTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
    crypto_type?: SortOrder
    type?: SortOrder
    target_address?: SortOrder
    timestamp?: SortOrder
  }

  export type CryptoTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sender_wallet_id?: SortOrder
    receiver_wallet_id?: SortOrder
    amount?: SortOrder
  }

  export type EnumCryptoTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoTransactionType | EnumCryptoTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoTransactionType[]
    notIn?: $Enums.CryptoTransactionType[]
    not?: NestedEnumCryptoTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CryptoTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel>
  }

  export type EnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[]
    notIn?: $Enums.OrderType[]
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    crypto_type?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    crypto_type?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    crypto_type?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
  }

  export type EnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[]
    notIn?: $Enums.OrderType[]
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    executed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TradeAvgOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    executed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
    executed_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TradeSumOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    buy_order_id?: SortOrder
    sell_order_id?: SortOrder
    amount?: SortOrder
    price_per_unit?: SortOrder
  }

  export type FiatTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput> | FiatTransactionCreateWithoutUserInput[] | FiatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatTransactionCreateOrConnectWithoutUserInput | FiatTransactionCreateOrConnectWithoutUserInput[]
    createMany?: FiatTransactionCreateManyUserInputEnvelope
    connect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
  }

  export type WalletCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type CryptoTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput> | CryptoTransactionCreateWithoutUserInput[] | CryptoTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutUserInput | CryptoTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CryptoTransactionCreateManyUserInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput> | TradeCreateWithoutBuyerInput[] | TradeUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuyerInput | TradeCreateOrConnectWithoutBuyerInput[]
    createMany?: TradeCreateManyBuyerInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutSellerInput = {
    create?: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput> | TradeCreateWithoutSellerInput[] | TradeUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSellerInput | TradeCreateOrConnectWithoutSellerInput[]
    createMany?: TradeCreateManySellerInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type FiatTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput> | FiatTransactionCreateWithoutUserInput[] | FiatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatTransactionCreateOrConnectWithoutUserInput | FiatTransactionCreateOrConnectWithoutUserInput[]
    createMany?: FiatTransactionCreateManyUserInputEnvelope
    connect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
  }

  export type CryptoTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput> | CryptoTransactionCreateWithoutUserInput[] | CryptoTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutUserInput | CryptoTransactionCreateOrConnectWithoutUserInput[]
    createMany?: CryptoTransactionCreateManyUserInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput> | TradeCreateWithoutBuyerInput[] | TradeUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuyerInput | TradeCreateOrConnectWithoutBuyerInput[]
    createMany?: TradeCreateManyBuyerInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput> | TradeCreateWithoutSellerInput[] | TradeUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSellerInput | TradeCreateOrConnectWithoutSellerInput[]
    createMany?: TradeCreateManySellerInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FiatTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput> | FiatTransactionCreateWithoutUserInput[] | FiatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatTransactionCreateOrConnectWithoutUserInput | FiatTransactionCreateOrConnectWithoutUserInput[]
    upsert?: FiatTransactionUpsertWithWhereUniqueWithoutUserInput | FiatTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FiatTransactionCreateManyUserInputEnvelope
    set?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    disconnect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    delete?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    connect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    update?: FiatTransactionUpdateWithWhereUniqueWithoutUserInput | FiatTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FiatTransactionUpdateManyWithWhereWithoutUserInput | FiatTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FiatTransactionScalarWhereInput | FiatTransactionScalarWhereInput[]
  }

  export type WalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type CryptoTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput> | CryptoTransactionCreateWithoutUserInput[] | CryptoTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutUserInput | CryptoTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutUserInput | CryptoTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoTransactionCreateManyUserInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutUserInput | CryptoTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutUserInput | CryptoTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput> | TradeCreateWithoutBuyerInput[] | TradeUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuyerInput | TradeCreateOrConnectWithoutBuyerInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutBuyerInput | TradeUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TradeCreateManyBuyerInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutBuyerInput | TradeUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutBuyerInput | TradeUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput> | TradeCreateWithoutSellerInput[] | TradeUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSellerInput | TradeCreateOrConnectWithoutSellerInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutSellerInput | TradeUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TradeCreateManySellerInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutSellerInput | TradeUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutSellerInput | TradeUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FiatTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput> | FiatTransactionCreateWithoutUserInput[] | FiatTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatTransactionCreateOrConnectWithoutUserInput | FiatTransactionCreateOrConnectWithoutUserInput[]
    upsert?: FiatTransactionUpsertWithWhereUniqueWithoutUserInput | FiatTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FiatTransactionCreateManyUserInputEnvelope
    set?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    disconnect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    delete?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    connect?: FiatTransactionWhereUniqueInput | FiatTransactionWhereUniqueInput[]
    update?: FiatTransactionUpdateWithWhereUniqueWithoutUserInput | FiatTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FiatTransactionUpdateManyWithWhereWithoutUserInput | FiatTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FiatTransactionScalarWhereInput | FiatTransactionScalarWhereInput[]
  }

  export type WalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput> | WalletCreateWithoutUserInput[] | WalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput | WalletCreateOrConnectWithoutUserInput[]
    upsert?: WalletUpsertWithWhereUniqueWithoutUserInput | WalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WalletCreateManyUserInputEnvelope
    set?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    disconnect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    delete?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    connect?: WalletWhereUniqueInput | WalletWhereUniqueInput[]
    update?: WalletUpdateWithWhereUniqueWithoutUserInput | WalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WalletUpdateManyWithWhereWithoutUserInput | WalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WalletScalarWhereInput | WalletScalarWhereInput[]
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput> | CryptoTransactionCreateWithoutUserInput[] | CryptoTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutUserInput | CryptoTransactionCreateOrConnectWithoutUserInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutUserInput | CryptoTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoTransactionCreateManyUserInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutUserInput | CryptoTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutUserInput | CryptoTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput> | TradeCreateWithoutBuyerInput[] | TradeUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuyerInput | TradeCreateOrConnectWithoutBuyerInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutBuyerInput | TradeUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: TradeCreateManyBuyerInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutBuyerInput | TradeUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutBuyerInput | TradeUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput> | TradeCreateWithoutSellerInput[] | TradeUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSellerInput | TradeCreateOrConnectWithoutSellerInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutSellerInput | TradeUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: TradeCreateManySellerInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutSellerInput | TradeUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutSellerInput | TradeUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletsInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type CryptoTransactionCreateNestedManyWithoutSender_walletInput = {
    create?: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput> | CryptoTransactionCreateWithoutSender_walletInput[] | CryptoTransactionUncheckedCreateWithoutSender_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutSender_walletInput | CryptoTransactionCreateOrConnectWithoutSender_walletInput[]
    createMany?: CryptoTransactionCreateManySender_walletInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type CryptoTransactionCreateNestedManyWithoutReceiver_walletInput = {
    create?: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput> | CryptoTransactionCreateWithoutReceiver_walletInput[] | CryptoTransactionUncheckedCreateWithoutReceiver_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutReceiver_walletInput | CryptoTransactionCreateOrConnectWithoutReceiver_walletInput[]
    createMany?: CryptoTransactionCreateManyReceiver_walletInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type CryptoTransactionUncheckedCreateNestedManyWithoutSender_walletInput = {
    create?: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput> | CryptoTransactionCreateWithoutSender_walletInput[] | CryptoTransactionUncheckedCreateWithoutSender_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutSender_walletInput | CryptoTransactionCreateOrConnectWithoutSender_walletInput[]
    createMany?: CryptoTransactionCreateManySender_walletInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type CryptoTransactionUncheckedCreateNestedManyWithoutReceiver_walletInput = {
    create?: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput> | CryptoTransactionCreateWithoutReceiver_walletInput[] | CryptoTransactionUncheckedCreateWithoutReceiver_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutReceiver_walletInput | CryptoTransactionCreateOrConnectWithoutReceiver_walletInput[]
    createMany?: CryptoTransactionCreateManyReceiver_walletInputEnvelope
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
  }

  export type EnumCryptoCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.CryptoCurrency
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutWalletsNestedInput = {
    create?: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletsInput
    upsert?: UserUpsertWithoutWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletsInput, UserUpdateWithoutWalletsInput>, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type CryptoTransactionUpdateManyWithoutSender_walletNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput> | CryptoTransactionCreateWithoutSender_walletInput[] | CryptoTransactionUncheckedCreateWithoutSender_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutSender_walletInput | CryptoTransactionCreateOrConnectWithoutSender_walletInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutSender_walletInput | CryptoTransactionUpsertWithWhereUniqueWithoutSender_walletInput[]
    createMany?: CryptoTransactionCreateManySender_walletInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutSender_walletInput | CryptoTransactionUpdateWithWhereUniqueWithoutSender_walletInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutSender_walletInput | CryptoTransactionUpdateManyWithWhereWithoutSender_walletInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type CryptoTransactionUpdateManyWithoutReceiver_walletNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput> | CryptoTransactionCreateWithoutReceiver_walletInput[] | CryptoTransactionUncheckedCreateWithoutReceiver_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutReceiver_walletInput | CryptoTransactionCreateOrConnectWithoutReceiver_walletInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutReceiver_walletInput | CryptoTransactionUpsertWithWhereUniqueWithoutReceiver_walletInput[]
    createMany?: CryptoTransactionCreateManyReceiver_walletInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutReceiver_walletInput | CryptoTransactionUpdateWithWhereUniqueWithoutReceiver_walletInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutReceiver_walletInput | CryptoTransactionUpdateManyWithWhereWithoutReceiver_walletInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutSender_walletNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput> | CryptoTransactionCreateWithoutSender_walletInput[] | CryptoTransactionUncheckedCreateWithoutSender_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutSender_walletInput | CryptoTransactionCreateOrConnectWithoutSender_walletInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutSender_walletInput | CryptoTransactionUpsertWithWhereUniqueWithoutSender_walletInput[]
    createMany?: CryptoTransactionCreateManySender_walletInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutSender_walletInput | CryptoTransactionUpdateWithWhereUniqueWithoutSender_walletInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutSender_walletInput | CryptoTransactionUpdateManyWithWhereWithoutSender_walletInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletNestedInput = {
    create?: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput> | CryptoTransactionCreateWithoutReceiver_walletInput[] | CryptoTransactionUncheckedCreateWithoutReceiver_walletInput[]
    connectOrCreate?: CryptoTransactionCreateOrConnectWithoutReceiver_walletInput | CryptoTransactionCreateOrConnectWithoutReceiver_walletInput[]
    upsert?: CryptoTransactionUpsertWithWhereUniqueWithoutReceiver_walletInput | CryptoTransactionUpsertWithWhereUniqueWithoutReceiver_walletInput[]
    createMany?: CryptoTransactionCreateManyReceiver_walletInputEnvelope
    set?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    disconnect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    delete?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    connect?: CryptoTransactionWhereUniqueInput | CryptoTransactionWhereUniqueInput[]
    update?: CryptoTransactionUpdateWithWhereUniqueWithoutReceiver_walletInput | CryptoTransactionUpdateWithWhereUniqueWithoutReceiver_walletInput[]
    updateMany?: CryptoTransactionUpdateManyWithWhereWithoutReceiver_walletInput | CryptoTransactionUpdateManyWithWhereWithoutReceiver_walletInput[]
    deleteMany?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFiatTransactionsInput = {
    create?: XOR<UserCreateWithoutFiatTransactionsInput, UserUncheckedCreateWithoutFiatTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFiatTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumFiatCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.FiatCurrency
  }

  export type EnumFiatTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.FiatTransactionType
  }

  export type UserUpdateOneRequiredWithoutFiatTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutFiatTransactionsInput, UserUncheckedCreateWithoutFiatTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFiatTransactionsInput
    upsert?: UserUpsertWithoutFiatTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFiatTransactionsInput, UserUpdateWithoutFiatTransactionsInput>, UserUncheckedUpdateWithoutFiatTransactionsInput>
  }

  export type UserCreateNestedOneWithoutCryptoTransactionsInput = {
    create?: XOR<UserCreateWithoutCryptoTransactionsInput, UserUncheckedCreateWithoutCryptoTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCryptoTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutSent_txnsInput = {
    create?: XOR<WalletCreateWithoutSent_txnsInput, WalletUncheckedCreateWithoutSent_txnsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSent_txnsInput
    connect?: WalletWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutReceived_txnsInput = {
    create?: XOR<WalletCreateWithoutReceived_txnsInput, WalletUncheckedCreateWithoutReceived_txnsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutReceived_txnsInput
    connect?: WalletWhereUniqueInput
  }

  export type EnumCryptoTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CryptoTransactionType
  }

  export type UserUpdateOneRequiredWithoutCryptoTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutCryptoTransactionsInput, UserUncheckedCreateWithoutCryptoTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCryptoTransactionsInput
    upsert?: UserUpsertWithoutCryptoTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCryptoTransactionsInput, UserUpdateWithoutCryptoTransactionsInput>, UserUncheckedUpdateWithoutCryptoTransactionsInput>
  }

  export type WalletUpdateOneRequiredWithoutSent_txnsNestedInput = {
    create?: XOR<WalletCreateWithoutSent_txnsInput, WalletUncheckedCreateWithoutSent_txnsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutSent_txnsInput
    upsert?: WalletUpsertWithoutSent_txnsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutSent_txnsInput, WalletUpdateWithoutSent_txnsInput>, WalletUncheckedUpdateWithoutSent_txnsInput>
  }

  export type WalletUpdateOneRequiredWithoutReceived_txnsNestedInput = {
    create?: XOR<WalletCreateWithoutReceived_txnsInput, WalletUncheckedCreateWithoutReceived_txnsInput>
    connectOrCreate?: WalletCreateOrConnectWithoutReceived_txnsInput
    upsert?: WalletUpsertWithoutReceived_txnsInput
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutReceived_txnsInput, WalletUpdateWithoutReceived_txnsInput>, WalletUncheckedUpdateWithoutReceived_txnsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type TradeCreateNestedManyWithoutBuy_orderInput = {
    create?: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput> | TradeCreateWithoutBuy_orderInput[] | TradeUncheckedCreateWithoutBuy_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuy_orderInput | TradeCreateOrConnectWithoutBuy_orderInput[]
    createMany?: TradeCreateManyBuy_orderInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeCreateNestedManyWithoutSell_orderInput = {
    create?: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput> | TradeCreateWithoutSell_orderInput[] | TradeUncheckedCreateWithoutSell_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSell_orderInput | TradeCreateOrConnectWithoutSell_orderInput[]
    createMany?: TradeCreateManySell_orderInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutBuy_orderInput = {
    create?: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput> | TradeCreateWithoutBuy_orderInput[] | TradeUncheckedCreateWithoutBuy_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuy_orderInput | TradeCreateOrConnectWithoutBuy_orderInput[]
    createMany?: TradeCreateManyBuy_orderInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type TradeUncheckedCreateNestedManyWithoutSell_orderInput = {
    create?: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput> | TradeCreateWithoutSell_orderInput[] | TradeUncheckedCreateWithoutSell_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSell_orderInput | TradeCreateOrConnectWithoutSell_orderInput[]
    createMany?: TradeCreateManySell_orderInputEnvelope
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
  }

  export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type TradeUpdateManyWithoutBuy_orderNestedInput = {
    create?: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput> | TradeCreateWithoutBuy_orderInput[] | TradeUncheckedCreateWithoutBuy_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuy_orderInput | TradeCreateOrConnectWithoutBuy_orderInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutBuy_orderInput | TradeUpsertWithWhereUniqueWithoutBuy_orderInput[]
    createMany?: TradeCreateManyBuy_orderInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutBuy_orderInput | TradeUpdateWithWhereUniqueWithoutBuy_orderInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutBuy_orderInput | TradeUpdateManyWithWhereWithoutBuy_orderInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUpdateManyWithoutSell_orderNestedInput = {
    create?: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput> | TradeCreateWithoutSell_orderInput[] | TradeUncheckedCreateWithoutSell_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSell_orderInput | TradeCreateOrConnectWithoutSell_orderInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutSell_orderInput | TradeUpsertWithWhereUniqueWithoutSell_orderInput[]
    createMany?: TradeCreateManySell_orderInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutSell_orderInput | TradeUpdateWithWhereUniqueWithoutSell_orderInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutSell_orderInput | TradeUpdateManyWithWhereWithoutSell_orderInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutBuy_orderNestedInput = {
    create?: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput> | TradeCreateWithoutBuy_orderInput[] | TradeUncheckedCreateWithoutBuy_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutBuy_orderInput | TradeCreateOrConnectWithoutBuy_orderInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutBuy_orderInput | TradeUpsertWithWhereUniqueWithoutBuy_orderInput[]
    createMany?: TradeCreateManyBuy_orderInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutBuy_orderInput | TradeUpdateWithWhereUniqueWithoutBuy_orderInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutBuy_orderInput | TradeUpdateManyWithWhereWithoutBuy_orderInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type TradeUncheckedUpdateManyWithoutSell_orderNestedInput = {
    create?: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput> | TradeCreateWithoutSell_orderInput[] | TradeUncheckedCreateWithoutSell_orderInput[]
    connectOrCreate?: TradeCreateOrConnectWithoutSell_orderInput | TradeCreateOrConnectWithoutSell_orderInput[]
    upsert?: TradeUpsertWithWhereUniqueWithoutSell_orderInput | TradeUpsertWithWhereUniqueWithoutSell_orderInput[]
    createMany?: TradeCreateManySell_orderInputEnvelope
    set?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    disconnect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    delete?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    connect?: TradeWhereUniqueInput | TradeWhereUniqueInput[]
    update?: TradeUpdateWithWhereUniqueWithoutSell_orderInput | TradeUpdateWithWhereUniqueWithoutSell_orderInput[]
    updateMany?: TradeUpdateManyWithWhereWithoutSell_orderInput | TradeUpdateManyWithWhereWithoutSell_orderInput[]
    deleteMany?: TradeScalarWhereInput | TradeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTrades_as_buyerInput = {
    create?: XOR<UserCreateWithoutTrades_as_buyerInput, UserUncheckedCreateWithoutTrades_as_buyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrades_as_buyerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTrades_as_sellerInput = {
    create?: XOR<UserCreateWithoutTrades_as_sellerInput, UserUncheckedCreateWithoutTrades_as_sellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrades_as_sellerInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutBuy_tradesInput = {
    create?: XOR<OrderCreateWithoutBuy_tradesInput, OrderUncheckedCreateWithoutBuy_tradesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutBuy_tradesInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutSell_tradesInput = {
    create?: XOR<OrderCreateWithoutSell_tradesInput, OrderUncheckedCreateWithoutSell_tradesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSell_tradesInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTrades_as_buyerNestedInput = {
    create?: XOR<UserCreateWithoutTrades_as_buyerInput, UserUncheckedCreateWithoutTrades_as_buyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrades_as_buyerInput
    upsert?: UserUpsertWithoutTrades_as_buyerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrades_as_buyerInput, UserUpdateWithoutTrades_as_buyerInput>, UserUncheckedUpdateWithoutTrades_as_buyerInput>
  }

  export type UserUpdateOneRequiredWithoutTrades_as_sellerNestedInput = {
    create?: XOR<UserCreateWithoutTrades_as_sellerInput, UserUncheckedCreateWithoutTrades_as_sellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutTrades_as_sellerInput
    upsert?: UserUpsertWithoutTrades_as_sellerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTrades_as_sellerInput, UserUpdateWithoutTrades_as_sellerInput>, UserUncheckedUpdateWithoutTrades_as_sellerInput>
  }

  export type OrderUpdateOneRequiredWithoutBuy_tradesNestedInput = {
    create?: XOR<OrderCreateWithoutBuy_tradesInput, OrderUncheckedCreateWithoutBuy_tradesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutBuy_tradesInput
    upsert?: OrderUpsertWithoutBuy_tradesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutBuy_tradesInput, OrderUpdateWithoutBuy_tradesInput>, OrderUncheckedUpdateWithoutBuy_tradesInput>
  }

  export type OrderUpdateOneRequiredWithoutSell_tradesNestedInput = {
    create?: XOR<OrderCreateWithoutSell_tradesInput, OrderUncheckedCreateWithoutSell_tradesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutSell_tradesInput
    upsert?: OrderUpsertWithoutSell_tradesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutSell_tradesInput, OrderUpdateWithoutSell_tradesInput>, OrderUncheckedUpdateWithoutSell_tradesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCryptoCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[]
    notIn?: $Enums.CryptoCurrency[]
    not?: NestedEnumCryptoCurrencyFilter<$PrismaModel> | $Enums.CryptoCurrency
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[]
    notIn?: $Enums.CryptoCurrency[]
    not?: NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.CryptoCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFiatCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatCurrency | EnumFiatCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.FiatCurrency[]
    notIn?: $Enums.FiatCurrency[]
    not?: NestedEnumFiatCurrencyFilter<$PrismaModel> | $Enums.FiatCurrency
  }

  export type NestedEnumFiatTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatTransactionType | EnumFiatTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FiatTransactionType[]
    notIn?: $Enums.FiatTransactionType[]
    not?: NestedEnumFiatTransactionTypeFilter<$PrismaModel> | $Enums.FiatTransactionType
  }

  export type NestedEnumFiatCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatCurrency | EnumFiatCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.FiatCurrency[]
    notIn?: $Enums.FiatCurrency[]
    not?: NestedEnumFiatCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.FiatCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFiatCurrencyFilter<$PrismaModel>
    _max?: NestedEnumFiatCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumFiatTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FiatTransactionType | EnumFiatTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FiatTransactionType[]
    notIn?: $Enums.FiatTransactionType[]
    not?: NestedEnumFiatTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.FiatTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFiatTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumFiatTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumCryptoTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoTransactionType | EnumCryptoTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoTransactionType[]
    notIn?: $Enums.CryptoTransactionType[]
    not?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel> | $Enums.CryptoTransactionType
  }

  export type NestedEnumCryptoTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoTransactionType | EnumCryptoTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoTransactionType[]
    notIn?: $Enums.CryptoTransactionType[]
    not?: NestedEnumCryptoTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CryptoTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCryptoTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[]
    notIn?: $Enums.OrderType[]
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[]
    notIn?: $Enums.OrderType[]
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type FiatTransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
  }

  export type FiatTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
  }

  export type FiatTransactionCreateOrConnectWithoutUserInput = {
    where: FiatTransactionWhereUniqueInput
    create: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput>
  }

  export type FiatTransactionCreateManyUserInputEnvelope = {
    data: FiatTransactionCreateManyUserInput | FiatTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletCreateWithoutUserInput = {
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionCreateNestedManyWithoutSender_walletInput
    received_txns?: CryptoTransactionCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutSender_walletInput
    received_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateManyUserInputEnvelope = {
    data: WalletCreateManyUserInput | WalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CryptoTransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
    sender_wallet: WalletCreateNestedOneWithoutSent_txnsInput
    receiver_wallet: WalletCreateNestedOneWithoutReceived_txnsInput
  }

  export type CryptoTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionCreateOrConnectWithoutUserInput = {
    where: CryptoTransactionWhereUniqueInput
    create: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput>
  }

  export type CryptoTransactionCreateManyUserInputEnvelope = {
    data: CryptoTransactionCreateManyUserInput | CryptoTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    buy_trades?: TradeCreateNestedManyWithoutBuy_orderInput
    sell_trades?: TradeCreateNestedManyWithoutSell_orderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    buy_trades?: TradeUncheckedCreateNestedManyWithoutBuy_orderInput
    sell_trades?: TradeUncheckedCreateNestedManyWithoutSell_orderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutBuyerInput = {
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
    seller: UserCreateNestedOneWithoutTrades_as_sellerInput
    buy_order: OrderCreateNestedOneWithoutBuy_tradesInput
    sell_order: OrderCreateNestedOneWithoutSell_tradesInput
  }

  export type TradeUncheckedCreateWithoutBuyerInput = {
    id?: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateOrConnectWithoutBuyerInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput>
  }

  export type TradeCreateManyBuyerInputEnvelope = {
    data: TradeCreateManyBuyerInput | TradeCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutSellerInput = {
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
    buyer: UserCreateNestedOneWithoutTrades_as_buyerInput
    buy_order: OrderCreateNestedOneWithoutBuy_tradesInput
    sell_order: OrderCreateNestedOneWithoutSell_tradesInput
  }

  export type TradeUncheckedCreateWithoutSellerInput = {
    id?: number
    buyer_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateOrConnectWithoutSellerInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput>
  }

  export type TradeCreateManySellerInputEnvelope = {
    data: TradeCreateManySellerInput | TradeCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type FiatTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: FiatTransactionWhereUniqueInput
    update: XOR<FiatTransactionUpdateWithoutUserInput, FiatTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<FiatTransactionCreateWithoutUserInput, FiatTransactionUncheckedCreateWithoutUserInput>
  }

  export type FiatTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: FiatTransactionWhereUniqueInput
    data: XOR<FiatTransactionUpdateWithoutUserInput, FiatTransactionUncheckedUpdateWithoutUserInput>
  }

  export type FiatTransactionUpdateManyWithWhereWithoutUserInput = {
    where: FiatTransactionScalarWhereInput
    data: XOR<FiatTransactionUpdateManyMutationInput, FiatTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type FiatTransactionScalarWhereInput = {
    AND?: FiatTransactionScalarWhereInput | FiatTransactionScalarWhereInput[]
    OR?: FiatTransactionScalarWhereInput[]
    NOT?: FiatTransactionScalarWhereInput | FiatTransactionScalarWhereInput[]
    id?: IntFilter<"FiatTransaction"> | number
    user_id?: IntFilter<"FiatTransaction"> | number
    amount?: DecimalFilter<"FiatTransaction"> | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFilter<"FiatTransaction"> | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFilter<"FiatTransaction"> | $Enums.FiatTransactionType
    timestamp?: DateTimeFilter<"FiatTransaction"> | Date | string
  }

  export type WalletUpsertWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type WalletUpdateWithWhereUniqueWithoutUserInput = {
    where: WalletWhereUniqueInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateManyWithWhereWithoutUserInput = {
    where: WalletScalarWhereInput
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyWithoutUserInput>
  }

  export type WalletScalarWhereInput = {
    AND?: WalletScalarWhereInput | WalletScalarWhereInput[]
    OR?: WalletScalarWhereInput[]
    NOT?: WalletScalarWhereInput | WalletScalarWhereInput[]
    id?: IntFilter<"Wallet"> | number
    user_id?: IntFilter<"Wallet"> | number
    currency_type?: EnumCryptoCurrencyFilter<"Wallet"> | $Enums.CryptoCurrency
    balance?: DecimalFilter<"Wallet"> | Decimal | DecimalJsLike | number | string
  }

  export type CryptoTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: CryptoTransactionWhereUniqueInput
    update: XOR<CryptoTransactionUpdateWithoutUserInput, CryptoTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<CryptoTransactionCreateWithoutUserInput, CryptoTransactionUncheckedCreateWithoutUserInput>
  }

  export type CryptoTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: CryptoTransactionWhereUniqueInput
    data: XOR<CryptoTransactionUpdateWithoutUserInput, CryptoTransactionUncheckedUpdateWithoutUserInput>
  }

  export type CryptoTransactionUpdateManyWithWhereWithoutUserInput = {
    where: CryptoTransactionScalarWhereInput
    data: XOR<CryptoTransactionUpdateManyMutationInput, CryptoTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type CryptoTransactionScalarWhereInput = {
    AND?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
    OR?: CryptoTransactionScalarWhereInput[]
    NOT?: CryptoTransactionScalarWhereInput | CryptoTransactionScalarWhereInput[]
    id?: IntFilter<"CryptoTransaction"> | number
    user_id?: IntFilter<"CryptoTransaction"> | number
    sender_wallet_id?: IntFilter<"CryptoTransaction"> | number
    receiver_wallet_id?: IntFilter<"CryptoTransaction"> | number
    amount?: DecimalFilter<"CryptoTransaction"> | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFilter<"CryptoTransaction"> | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFilter<"CryptoTransaction"> | $Enums.CryptoTransactionType
    target_address?: StringNullableFilter<"CryptoTransaction"> | string | null
    timestamp?: DateTimeFilter<"CryptoTransaction"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    user_id?: IntFilter<"Order"> | number
    type?: EnumOrderTypeFilter<"Order"> | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFilter<"Order"> | $Enums.CryptoCurrency
    amount?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Order"> | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
  }

  export type TradeUpsertWithWhereUniqueWithoutBuyerInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutBuyerInput, TradeUncheckedUpdateWithoutBuyerInput>
    create: XOR<TradeCreateWithoutBuyerInput, TradeUncheckedCreateWithoutBuyerInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutBuyerInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutBuyerInput, TradeUncheckedUpdateWithoutBuyerInput>
  }

  export type TradeUpdateManyWithWhereWithoutBuyerInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutBuyerInput>
  }

  export type TradeScalarWhereInput = {
    AND?: TradeScalarWhereInput | TradeScalarWhereInput[]
    OR?: TradeScalarWhereInput[]
    NOT?: TradeScalarWhereInput | TradeScalarWhereInput[]
    id?: IntFilter<"Trade"> | number
    buyer_id?: IntFilter<"Trade"> | number
    seller_id?: IntFilter<"Trade"> | number
    buy_order_id?: IntFilter<"Trade"> | number
    sell_order_id?: IntFilter<"Trade"> | number
    amount?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFilter<"Trade"> | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFilter<"Trade"> | Date | string
    updated_at?: DateTimeFilter<"Trade"> | Date | string
  }

  export type TradeUpsertWithWhereUniqueWithoutSellerInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutSellerInput, TradeUncheckedUpdateWithoutSellerInput>
    create: XOR<TradeCreateWithoutSellerInput, TradeUncheckedCreateWithoutSellerInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutSellerInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutSellerInput, TradeUncheckedUpdateWithoutSellerInput>
  }

  export type TradeUpdateManyWithWhereWithoutSellerInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutSellerInput>
  }

  export type UserCreateWithoutWalletsInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutWalletsInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
  }

  export type CryptoTransactionCreateWithoutSender_walletInput = {
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCryptoTransactionsInput
    receiver_wallet: WalletCreateNestedOneWithoutReceived_txnsInput
  }

  export type CryptoTransactionUncheckedCreateWithoutSender_walletInput = {
    id?: number
    user_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionCreateOrConnectWithoutSender_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    create: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput>
  }

  export type CryptoTransactionCreateManySender_walletInputEnvelope = {
    data: CryptoTransactionCreateManySender_walletInput | CryptoTransactionCreateManySender_walletInput[]
    skipDuplicates?: boolean
  }

  export type CryptoTransactionCreateWithoutReceiver_walletInput = {
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCryptoTransactionsInput
    sender_wallet: WalletCreateNestedOneWithoutSent_txnsInput
  }

  export type CryptoTransactionUncheckedCreateWithoutReceiver_walletInput = {
    id?: number
    user_id: number
    sender_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionCreateOrConnectWithoutReceiver_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    create: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput>
  }

  export type CryptoTransactionCreateManyReceiver_walletInputEnvelope = {
    data: CryptoTransactionCreateManyReceiver_walletInput | CryptoTransactionCreateManyReceiver_walletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletsInput = {
    update: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
    create: XOR<UserCreateWithoutWalletsInput, UserUncheckedCreateWithoutWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletsInput, UserUncheckedUpdateWithoutWalletsInput>
  }

  export type UserUpdateWithoutWalletsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type CryptoTransactionUpsertWithWhereUniqueWithoutSender_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    update: XOR<CryptoTransactionUpdateWithoutSender_walletInput, CryptoTransactionUncheckedUpdateWithoutSender_walletInput>
    create: XOR<CryptoTransactionCreateWithoutSender_walletInput, CryptoTransactionUncheckedCreateWithoutSender_walletInput>
  }

  export type CryptoTransactionUpdateWithWhereUniqueWithoutSender_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    data: XOR<CryptoTransactionUpdateWithoutSender_walletInput, CryptoTransactionUncheckedUpdateWithoutSender_walletInput>
  }

  export type CryptoTransactionUpdateManyWithWhereWithoutSender_walletInput = {
    where: CryptoTransactionScalarWhereInput
    data: XOR<CryptoTransactionUpdateManyMutationInput, CryptoTransactionUncheckedUpdateManyWithoutSender_walletInput>
  }

  export type CryptoTransactionUpsertWithWhereUniqueWithoutReceiver_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    update: XOR<CryptoTransactionUpdateWithoutReceiver_walletInput, CryptoTransactionUncheckedUpdateWithoutReceiver_walletInput>
    create: XOR<CryptoTransactionCreateWithoutReceiver_walletInput, CryptoTransactionUncheckedCreateWithoutReceiver_walletInput>
  }

  export type CryptoTransactionUpdateWithWhereUniqueWithoutReceiver_walletInput = {
    where: CryptoTransactionWhereUniqueInput
    data: XOR<CryptoTransactionUpdateWithoutReceiver_walletInput, CryptoTransactionUncheckedUpdateWithoutReceiver_walletInput>
  }

  export type CryptoTransactionUpdateManyWithWhereWithoutReceiver_walletInput = {
    where: CryptoTransactionScalarWhereInput
    data: XOR<CryptoTransactionUpdateManyMutationInput, CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletInput>
  }

  export type UserCreateWithoutFiatTransactionsInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutFiatTransactionsInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutFiatTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFiatTransactionsInput, UserUncheckedCreateWithoutFiatTransactionsInput>
  }

  export type UserUpsertWithoutFiatTransactionsInput = {
    update: XOR<UserUpdateWithoutFiatTransactionsInput, UserUncheckedUpdateWithoutFiatTransactionsInput>
    create: XOR<UserCreateWithoutFiatTransactionsInput, UserUncheckedCreateWithoutFiatTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFiatTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFiatTransactionsInput, UserUncheckedUpdateWithoutFiatTransactionsInput>
  }

  export type UserUpdateWithoutFiatTransactionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutFiatTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateWithoutCryptoTransactionsInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    wallets?: WalletCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutCryptoTransactionsInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutCryptoTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCryptoTransactionsInput, UserUncheckedCreateWithoutCryptoTransactionsInput>
  }

  export type WalletCreateWithoutSent_txnsInput = {
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutWalletsInput
    received_txns?: CryptoTransactionCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletUncheckedCreateWithoutSent_txnsInput = {
    id?: number
    user_id: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    received_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutReceiver_walletInput
  }

  export type WalletCreateOrConnectWithoutSent_txnsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutSent_txnsInput, WalletUncheckedCreateWithoutSent_txnsInput>
  }

  export type WalletCreateWithoutReceived_txnsInput = {
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    user: UserCreateNestedOneWithoutWalletsInput
    sent_txns?: CryptoTransactionCreateNestedManyWithoutSender_walletInput
  }

  export type WalletUncheckedCreateWithoutReceived_txnsInput = {
    id?: number
    user_id: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedCreateNestedManyWithoutSender_walletInput
  }

  export type WalletCreateOrConnectWithoutReceived_txnsInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutReceived_txnsInput, WalletUncheckedCreateWithoutReceived_txnsInput>
  }

  export type UserUpsertWithoutCryptoTransactionsInput = {
    update: XOR<UserUpdateWithoutCryptoTransactionsInput, UserUncheckedUpdateWithoutCryptoTransactionsInput>
    create: XOR<UserCreateWithoutCryptoTransactionsInput, UserUncheckedCreateWithoutCryptoTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCryptoTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCryptoTransactionsInput, UserUncheckedUpdateWithoutCryptoTransactionsInput>
  }

  export type UserUpdateWithoutCryptoTransactionsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    wallets?: WalletUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutCryptoTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type WalletUpsertWithoutSent_txnsInput = {
    update: XOR<WalletUpdateWithoutSent_txnsInput, WalletUncheckedUpdateWithoutSent_txnsInput>
    create: XOR<WalletCreateWithoutSent_txnsInput, WalletUncheckedCreateWithoutSent_txnsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutSent_txnsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutSent_txnsInput, WalletUncheckedUpdateWithoutSent_txnsInput>
  }

  export type WalletUpdateWithoutSent_txnsInput = {
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    received_txns?: CryptoTransactionUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletUncheckedUpdateWithoutSent_txnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    received_txns?: CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletUpsertWithoutReceived_txnsInput = {
    update: XOR<WalletUpdateWithoutReceived_txnsInput, WalletUncheckedUpdateWithoutReceived_txnsInput>
    create: XOR<WalletCreateWithoutReceived_txnsInput, WalletUncheckedCreateWithoutReceived_txnsInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutReceived_txnsInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutReceived_txnsInput, WalletUncheckedUpdateWithoutReceived_txnsInput>
  }

  export type WalletUpdateWithoutReceived_txnsInput = {
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    user?: UserUpdateOneRequiredWithoutWalletsNestedInput
    sent_txns?: CryptoTransactionUpdateManyWithoutSender_walletNestedInput
  }

  export type WalletUncheckedUpdateWithoutReceived_txnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedUpdateManyWithoutSender_walletNestedInput
  }

  export type UserCreateWithoutOrdersInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    wallets?: WalletCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type TradeCreateWithoutBuy_orderInput = {
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
    buyer: UserCreateNestedOneWithoutTrades_as_buyerInput
    seller: UserCreateNestedOneWithoutTrades_as_sellerInput
    sell_order: OrderCreateNestedOneWithoutSell_tradesInput
  }

  export type TradeUncheckedCreateWithoutBuy_orderInput = {
    id?: number
    buyer_id: number
    seller_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateOrConnectWithoutBuy_orderInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput>
  }

  export type TradeCreateManyBuy_orderInputEnvelope = {
    data: TradeCreateManyBuy_orderInput | TradeCreateManyBuy_orderInput[]
    skipDuplicates?: boolean
  }

  export type TradeCreateWithoutSell_orderInput = {
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
    buyer: UserCreateNestedOneWithoutTrades_as_buyerInput
    seller: UserCreateNestedOneWithoutTrades_as_sellerInput
    buy_order: OrderCreateNestedOneWithoutBuy_tradesInput
  }

  export type TradeUncheckedCreateWithoutSell_orderInput = {
    id?: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateOrConnectWithoutSell_orderInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput>
  }

  export type TradeCreateManySell_orderInputEnvelope = {
    data: TradeCreateManySell_orderInput | TradeCreateManySell_orderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    wallets?: WalletUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type TradeUpsertWithWhereUniqueWithoutBuy_orderInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutBuy_orderInput, TradeUncheckedUpdateWithoutBuy_orderInput>
    create: XOR<TradeCreateWithoutBuy_orderInput, TradeUncheckedCreateWithoutBuy_orderInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutBuy_orderInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutBuy_orderInput, TradeUncheckedUpdateWithoutBuy_orderInput>
  }

  export type TradeUpdateManyWithWhereWithoutBuy_orderInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutBuy_orderInput>
  }

  export type TradeUpsertWithWhereUniqueWithoutSell_orderInput = {
    where: TradeWhereUniqueInput
    update: XOR<TradeUpdateWithoutSell_orderInput, TradeUncheckedUpdateWithoutSell_orderInput>
    create: XOR<TradeCreateWithoutSell_orderInput, TradeUncheckedCreateWithoutSell_orderInput>
  }

  export type TradeUpdateWithWhereUniqueWithoutSell_orderInput = {
    where: TradeWhereUniqueInput
    data: XOR<TradeUpdateWithoutSell_orderInput, TradeUncheckedUpdateWithoutSell_orderInput>
  }

  export type TradeUpdateManyWithWhereWithoutSell_orderInput = {
    where: TradeScalarWhereInput
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyWithoutSell_orderInput>
  }

  export type UserCreateWithoutTrades_as_buyerInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    wallets?: WalletCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_seller?: TradeCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutTrades_as_buyerInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_seller?: TradeUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutTrades_as_buyerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrades_as_buyerInput, UserUncheckedCreateWithoutTrades_as_buyerInput>
  }

  export type UserCreateWithoutTrades_as_sellerInput = {
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionCreateNestedManyWithoutUserInput
    wallets?: WalletCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutTrades_as_sellerInput = {
    id?: number
    firstName: string
    lastName: string
    userName?: string | null
    email?: string | null
    password: string
    role?: $Enums.Role
    created_at?: Date | string
    updated_at?: Date | string
    fiatTransactions?: FiatTransactionUncheckedCreateNestedManyWithoutUserInput
    wallets?: WalletUncheckedCreateNestedManyWithoutUserInput
    cryptoTransactions?: CryptoTransactionUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    trades_as_buyer?: TradeUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutTrades_as_sellerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTrades_as_sellerInput, UserUncheckedCreateWithoutTrades_as_sellerInput>
  }

  export type OrderCreateWithoutBuy_tradesInput = {
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    sell_trades?: TradeCreateNestedManyWithoutSell_orderInput
  }

  export type OrderUncheckedCreateWithoutBuy_tradesInput = {
    id?: number
    user_id: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    sell_trades?: TradeUncheckedCreateNestedManyWithoutSell_orderInput
  }

  export type OrderCreateOrConnectWithoutBuy_tradesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuy_tradesInput, OrderUncheckedCreateWithoutBuy_tradesInput>
  }

  export type OrderCreateWithoutSell_tradesInput = {
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    buy_trades?: TradeCreateNestedManyWithoutBuy_orderInput
  }

  export type OrderUncheckedCreateWithoutSell_tradesInput = {
    id?: number
    user_id: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
    buy_trades?: TradeUncheckedCreateNestedManyWithoutBuy_orderInput
  }

  export type OrderCreateOrConnectWithoutSell_tradesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSell_tradesInput, OrderUncheckedCreateWithoutSell_tradesInput>
  }

  export type UserUpsertWithoutTrades_as_buyerInput = {
    update: XOR<UserUpdateWithoutTrades_as_buyerInput, UserUncheckedUpdateWithoutTrades_as_buyerInput>
    create: XOR<UserCreateWithoutTrades_as_buyerInput, UserUncheckedCreateWithoutTrades_as_buyerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrades_as_buyerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrades_as_buyerInput, UserUncheckedUpdateWithoutTrades_as_buyerInput>
  }

  export type UserUpdateWithoutTrades_as_buyerInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    wallets?: WalletUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_seller?: TradeUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutTrades_as_buyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_seller?: TradeUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserUpsertWithoutTrades_as_sellerInput = {
    update: XOR<UserUpdateWithoutTrades_as_sellerInput, UserUncheckedUpdateWithoutTrades_as_sellerInput>
    create: XOR<UserCreateWithoutTrades_as_sellerInput, UserUncheckedCreateWithoutTrades_as_sellerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTrades_as_sellerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTrades_as_sellerInput, UserUncheckedUpdateWithoutTrades_as_sellerInput>
  }

  export type UserUpdateWithoutTrades_as_sellerInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUpdateManyWithoutUserNestedInput
    wallets?: WalletUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutTrades_as_sellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    userName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatTransactions?: FiatTransactionUncheckedUpdateManyWithoutUserNestedInput
    wallets?: WalletUncheckedUpdateManyWithoutUserNestedInput
    cryptoTransactions?: CryptoTransactionUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    trades_as_buyer?: TradeUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type OrderUpsertWithoutBuy_tradesInput = {
    update: XOR<OrderUpdateWithoutBuy_tradesInput, OrderUncheckedUpdateWithoutBuy_tradesInput>
    create: XOR<OrderCreateWithoutBuy_tradesInput, OrderUncheckedCreateWithoutBuy_tradesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutBuy_tradesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutBuy_tradesInput, OrderUncheckedUpdateWithoutBuy_tradesInput>
  }

  export type OrderUpdateWithoutBuy_tradesInput = {
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    sell_trades?: TradeUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuy_tradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sell_trades?: TradeUncheckedUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderUpsertWithoutSell_tradesInput = {
    update: XOR<OrderUpdateWithoutSell_tradesInput, OrderUncheckedUpdateWithoutSell_tradesInput>
    create: XOR<OrderCreateWithoutSell_tradesInput, OrderUncheckedCreateWithoutSell_tradesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutSell_tradesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutSell_tradesInput, OrderUncheckedUpdateWithoutSell_tradesInput>
  }

  export type OrderUpdateWithoutSell_tradesInput = {
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    buy_trades?: TradeUpdateManyWithoutBuy_orderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSell_tradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buy_trades?: TradeUncheckedUpdateManyWithoutBuy_orderNestedInput
  }

  export type FiatTransactionCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    currency: $Enums.FiatCurrency
    type: $Enums.FiatTransactionType
    timestamp?: Date | string
  }

  export type WalletCreateManyUserInput = {
    id?: number
    currency_type: $Enums.CryptoCurrency
    balance: Decimal | DecimalJsLike | number | string
  }

  export type CryptoTransactionCreateManyUserInput = {
    id?: number
    sender_wallet_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: number
    type: $Enums.OrderType
    crypto_type: $Enums.CryptoCurrency
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    status: $Enums.OrderStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateManyBuyerInput = {
    id?: number
    seller_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateManySellerInput = {
    id?: number
    buyer_id: number
    buy_order_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type FiatTransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: EnumFiatCurrencyFieldUpdateOperationsInput | $Enums.FiatCurrency
    type?: EnumFiatTransactionTypeFieldUpdateOperationsInput | $Enums.FiatTransactionType
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUpdateWithoutUserInput = {
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUpdateManyWithoutSender_walletNestedInput
    received_txns?: CryptoTransactionUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sent_txns?: CryptoTransactionUncheckedUpdateManyWithoutSender_walletNestedInput
    received_txns?: CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletNestedInput
  }

  export type WalletUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CryptoTransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    sender_wallet?: WalletUpdateOneRequiredWithoutSent_txnsNestedInput
    receiver_wallet?: WalletUpdateOneRequiredWithoutReceived_txnsNestedInput
  }

  export type CryptoTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buy_trades?: TradeUpdateManyWithoutBuy_orderNestedInput
    sell_trades?: TradeUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buy_trades?: TradeUncheckedUpdateManyWithoutBuy_orderNestedInput
    sell_trades?: TradeUncheckedUpdateManyWithoutSell_orderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUpdateWithoutBuyerInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutTrades_as_sellerNestedInput
    buy_order?: OrderUpdateOneRequiredWithoutBuy_tradesNestedInput
    sell_order?: OrderUpdateOneRequiredWithoutSell_tradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutBuyerInput = {
    id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUpdateWithoutSellerInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTrades_as_buyerNestedInput
    buy_order?: OrderUpdateOneRequiredWithoutBuy_tradesNestedInput
    sell_order?: OrderUpdateOneRequiredWithoutSell_tradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionCreateManySender_walletInput = {
    id?: number
    user_id: number
    receiver_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionCreateManyReceiver_walletInput = {
    id?: number
    user_id: number
    sender_wallet_id: number
    amount: Decimal | DecimalJsLike | number | string
    crypto_type: $Enums.CryptoCurrency
    type: $Enums.CryptoTransactionType
    target_address?: string | null
    timestamp?: Date | string
  }

  export type CryptoTransactionUpdateWithoutSender_walletInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCryptoTransactionsNestedInput
    receiver_wallet?: WalletUpdateOneRequiredWithoutReceived_txnsNestedInput
  }

  export type CryptoTransactionUncheckedUpdateWithoutSender_walletInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutSender_walletInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    receiver_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionUpdateWithoutReceiver_walletInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCryptoTransactionsNestedInput
    sender_wallet?: WalletUpdateOneRequiredWithoutSent_txnsNestedInput
  }

  export type CryptoTransactionUncheckedUpdateWithoutReceiver_walletInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoTransactionUncheckedUpdateManyWithoutReceiver_walletInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sender_wallet_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    crypto_type?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    type?: EnumCryptoTransactionTypeFieldUpdateOperationsInput | $Enums.CryptoTransactionType
    target_address?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateManyBuy_orderInput = {
    id?: number
    buyer_id: number
    seller_id: number
    sell_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeCreateManySell_orderInput = {
    id?: number
    buyer_id: number
    seller_id: number
    buy_order_id: number
    amount: Decimal | DecimalJsLike | number | string
    price_per_unit: Decimal | DecimalJsLike | number | string
    executed_at?: Date | string
    updated_at?: Date | string
  }

  export type TradeUpdateWithoutBuy_orderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTrades_as_buyerNestedInput
    seller?: UserUpdateOneRequiredWithoutTrades_as_sellerNestedInput
    sell_order?: OrderUpdateOneRequiredWithoutSell_tradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutBuy_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutBuy_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    sell_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUpdateWithoutSell_orderInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutTrades_as_buyerNestedInput
    seller?: UserUpdateOneRequiredWithoutTrades_as_sellerNestedInput
    buy_order?: OrderUpdateOneRequiredWithoutBuy_tradesNestedInput
  }

  export type TradeUncheckedUpdateWithoutSell_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeUncheckedUpdateManyWithoutSell_orderInput = {
    id?: IntFieldUpdateOperationsInput | number
    buyer_id?: IntFieldUpdateOperationsInput | number
    seller_id?: IntFieldUpdateOperationsInput | number
    buy_order_id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    price_per_unit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    executed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}