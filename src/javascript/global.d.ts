// Copyright 2019 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * This file includes global type definitions for data injected during
 * server-side template rendering.
 */

interface Window {
  readonly GAPI_ACCESS_TOKEN: string;
}

declare module "javascript-api-utils/lib/account-summaries" {
  interface Property {
    name: any;
    id: any;
  }
  interface Account {
    name: any;
  }
  export const get: () => Promise<{
    allProperties: () => Property[];
    getAccountByPropertyId: (id: any) => Account;
  }>;
}

window.GA;
