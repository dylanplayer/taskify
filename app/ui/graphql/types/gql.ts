/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query tasks {\n    tasks {\n      id,\n      title,\n      createdAt,\n      updatedAt,\n    }\n  }\n": types.TasksDocument,
    "\n  query test {\n    ping\n  }\n": types.TestDocument,
};

export function graphql(source: "\n  query tasks {\n    tasks {\n      id,\n      title,\n      createdAt,\n      updatedAt,\n    }\n  }\n"): (typeof documents)["\n  query tasks {\n    tasks {\n      id,\n      title,\n      createdAt,\n      updatedAt,\n    }\n  }\n"];
export function graphql(source: "\n  query test {\n    ping\n  }\n"): (typeof documents)["\n  query test {\n    ping\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;