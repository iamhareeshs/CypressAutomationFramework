/// <reference types="cypress" />
declare type cy = Cypress.cy & EventEmitter;
declare type Cypress = Cypress.Cypress & EventEmitter;
/**
 * Object `cy` all Cypress API commands.
 * @see https://on.cypress.io/api
 * @type {Cypress.cy & EventEmitter}
 * @example
 *  cy.get('button').click()
 *  cy.get('.result').contains('Expected text')
 */
export declare const cy: cy;
/**
 * Holds bundled Cypress utilities and constants.
 * @see https://on.cypress.io/api
 * @type {Cypress.Cypress & EventEmitter}
 * @example
 *  Cypress.config("pageLoadTimeout") // => 60000
 *  Cypress.version // => "6.3.0"
 *  Cypress._ // => Lodash _
 */
export declare const Cypress: Cypress;
/**
 * Chai assertion
 * @example expect('hello').to.equal('hello')
 * @type {Chai.ExpectStatic}
 */
export declare const expect: Chai.ExpectStatic;
/**
 * Chai assertion
 * @type {Chai.AssertStatic}
 */
export declare const assert: Chai.AssertStatic;
export declare const describe: Mocha.SuiteFunction;
export declare const context: Mocha.SuiteFunction;
export declare const xdescribe: Mocha.PendingSuiteFunction;
export declare const xcontext: Mocha.PendingSuiteFunction;
export declare const before: Mocha.HookFunction;
export declare const beforeEach: Mocha.HookFunction;
export declare const after: Mocha.HookFunction;
export declare const afterEach: Mocha.HookFunction;
export declare const it: Mocha.TestFunction;
export declare const test: Mocha.TestFunction;
export declare const xit: Mocha.PendingTestFunction;
export {};

declare namespace Cypress {
    interface Chainable<Subject = any> {
        waitUntil<ReturnType = any>(
            checkFunction: (
                subject: Subject | undefined
            ) => ReturnType | Chainable<ReturnType> | Promise<ReturnType>,
            options?: WaitUntilOptions<Subject>
        ): Chainable<Subject>
    }
}

//# sourceMappingURL=index.d.ts.map