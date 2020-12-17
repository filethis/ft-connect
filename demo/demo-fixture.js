/* ft-connect element demo */
/* Imports */
/**

A drop-in HTML 5 element that quickly, securely, and flexibly integrates your application with the FileThis API.

@demo
 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/polymer/polymer-legacy.js';
import '../ft-connect-tabbed.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer
({
  _template: html`
        <style include="iron-flex iron-flex-alignment iron-positioning"></style>

        <style>
            :host {
                display: block;
                overflow: hidden;
            }
        </style>

        <ft-element-demo name="ft-connect-tabbed" style="width:100%; height: 100%; ">
            <!-- Settings -->
            <ft-connection-panel-settings-editor slot="config" style="height:100%; padding:20px; " ft-connection-panel-show-heading="{{ftConnectionPanelShowHeading}}" ft-connection-panel-heading="{{ftConnectionPanelHeading}}" ft-connection-panel-show-delete-button="{{ftConnectionPanelShowDeleteButton}}" ft-connection-show-details-panel="{{ftConnectionShowDetailsPanel}}">
            </ft-connection-panel-settings-editor>

            <!-- Panel -->
            <ft-connect-tabbed id="component" slot="instance" style="width:100%; height: 100%; " fake-data="true" fake-sources="true" debug="true">
            </ft-connect-tabbed>

        </ft-element-demo>
`,

  is: 'demo-fixture',

  ready: function()
  {
      this.$.component.getAllData();
  }
});
