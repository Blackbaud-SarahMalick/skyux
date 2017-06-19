/*global describe, it, browser */

describe('datepicker', function () {
    'use strict';

    it('should match the baseline screenshot when the datepickers are closed', function () {
        return browser
            .setupTest('/datepicker/fixtures/test.full.html')
            .compareScreenshot({
                screenshotName: 'datepicker_closed',
                selector: '#screenshot-datepickers'
            });

    });

    it('should match the baseline screenshot when the datepicker is open', function () {
        return browser
            .setupTest('/datepicker/fixtures/test.full.html')
            .click('#screenshot-datepicker .bb-date-field-calendar-button')
            .waitForVisible('ul.uib-datepicker-popup')
            .compareScreenshot({
                screenshotName: 'datepicker_open',
                selector: '#screenshot-datepicker'
            });
    });

    it('should match the baseline screenshot when the datepicker is appended to body and open', function () {
        return browser
            .setupTest('/datepicker/fixtures/test.full.html')
            .click('#screenshot-datepicker-append-to-body .bb-date-field-calendar-button')
            .waitForVisible('ul.uib-datepicker-popup')
            .compareScreenshot({
                screenshotName: 'datepicker_open_append',
                selector: '#screenshot-datepicker-append-to-body'
            });
    });

    it('should match the baseline screenshot when the is opened from a nested modal', function () {
        return browser
            .setupTest('/datepicker/fixtures/test.full.html')
            .click('.open-first-modal')
            .waitForVisible('.open-second-modal')
            .click('.open-second-modal')
            .waitForVisible('.second-modal-ready')
            .click('.second-modal-ready .bb-date-field-calendar-button')
            .waitForVisible('ul.uib-datepicker-popup')
            .compareScreenshot({
                screenshotName: 'datepicker_nested_modal',
                selector: 'body'
            })
            .click('.bb-modal .modal-dialog .close')
            .click('.bb-modal .modal-dialog .close');
    });

});
