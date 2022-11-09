import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type MyfitrackrProdDBMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMyfitrackrProdDB = {
  readonly id: string;
  readonly alias: string;
  readonly name: string;
  readonly workout: string;
  readonly count: number;
  readonly profilepicurl: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMyfitrackrProdDB = {
  readonly id: string;
  readonly alias: string;
  readonly name: string;
  readonly workout: string;
  readonly count: number;
  readonly profilepicurl: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MyfitrackrProdDB = LazyLoading extends LazyLoadingDisabled ? EagerMyfitrackrProdDB : LazyMyfitrackrProdDB

export declare const MyfitrackrProdDB: (new (init: ModelInit<MyfitrackrProdDB, MyfitrackrProdDBMetaData>) => MyfitrackrProdDB) & {
  copyOf(source: MyfitrackrProdDB, mutator: (draft: MutableModel<MyfitrackrProdDB, MyfitrackrProdDBMetaData>) => MutableModel<MyfitrackrProdDB, MyfitrackrProdDBMetaData> | void): MyfitrackrProdDB;
}