/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import DecoupledEditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListStyle from "@ckeditor/ckeditor5-list/src/liststyle";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import LinkImage from "@ckeditor/ckeditor5-link/src/linkimage";

export default class DecoupledEditor extends DecoupledEditorBase {}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
  Essentials,
  Alignment,
  Base64UploadAdapter,
  FontSize,
  FontFamily,
  FontColor,
  FontBackgroundColor,
  Autoformat,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  BlockQuote,
  CKFinder,
  EasyImage,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageInsert,
  ImageResize,
  Indent,
  IndentBlock,
  Link,
  List,
  ListStyle,
  // MediaEmbed,
  Paragraph,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TextTransformation,
  LinkImage,
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "fontfamily",
      "fontsize",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "alignment",
      "|",
      "numberedList",
      "bulletedList",
      "|",
      "indent",
      "outdent",
      "|",
      "link",
      "blockquote",
      "imageInsert",
      "insertTable",
      // "mediaEmbed",
      "|",
      "undo",
      "redo",
    ],
  },
  image: {
    styles: ["full", "alignLeft", "alignRight"],
    toolbar: [
      "imageStyle:alignLeft",
      "imageStyle:full",
      "imageStyle:alignRight",
      "|",
      "imageTextAlternative",
      "|",
      "linkImage",
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
  fontColor: {
    colors: [
      {
        color: "hsl(0, 0%, 0%)",
        label: "Black",
      },
      {
        color: "hsl(0, 0%, 30%)",
        label: "Dim grey",
      },
      {
        color: "hsl(0, 0%, 60%)",
        label: "Grey",
      },
      {
        color: "hsl(0, 0%, 90%)",
        label: "Light grey",
      },
      {
        color: "hsl(0, 0%, 100%)",
        label: "White",
        hasBorder: true,
      },
      {
        color: "hsl(0, 75%, 60%)",
        label: "Red",
      },
      {
        color: "hsl(30, 75%, 60%)",
        label: "Orange",
      },
      {
        color: "hsl(60, 75%, 60%)",
        label: "Yellow",
      },
      {
        color: "hsl(90, 75%, 60%)",
        label: "Light green",
      },
      {
        color: "hsl(120, 75%, 60%)",
        label: "Green",
      },
      {
        color: "hsl(150, 75%, 60%)",
        label: "Aquamarine",
      },
      {
        color: "hsl(180, 75%, 60%)",
        label: "Turquoise",
      },
      {
        color: "hsl(210, 75%, 60%)",
        label: "Light blue",
      },
      {
        color: "hsl(240, 75%, 60%)",
        label: "Blue",
      },
      {
        color: "hsl(270, 75%, 60%)",
        label: "Purple",
      },

      {
        color: "hsl(360, 66%, 44%)",
        label: "#B82627",
      },
      {
        color: "hsl(196, 80%, 52%)",
        label: "#24B4E7",
      },
      {
        color: "hsl(36, 15%, 32%)",
        label: "#5E5445",
      },
      {
        color: "hsl(271, 12%, 34%)",
        label: "#564B60",
      },
      {
        color: "hsl(33, 11%, 40%)",
        label: "#70665A",
      },
    ],
  },
  fontBackgroundColor:  {
    colors: [
      {
        color: 'hsl(0, 0%, 0%)',
        label: 'Black'
      },
      {
        color: 'hsl(0, 0%, 30%)',
        label: 'Dim grey'
      },
      {
        color: 'hsl(0, 0%, 60%)',
        label: 'Grey'
      },
      {
        color: 'hsl(0, 0%, 90%)',
        label: 'Light grey'
      },
      {
        color: 'hsl(0, 0%, 100%)',
        label: 'White',
        hasBorder: true
      },
      {
        color: 'hsl(0, 75%, 60%)',
        label: 'Red'
      },
      {
        color: 'hsl(30, 75%, 60%)',
        label: 'Orange'
      },
      {
        color: 'hsl(60, 75%, 60%)',
        label: 'Yellow'
      },
      {
        color: 'hsl(90, 75%, 60%)',
        label: 'Light green'
      },
      {
        color: 'hsl(120, 75%, 60%)',
        label: 'Green'
      },
      {
        color: 'hsl(150, 75%, 60%)',
        label: 'Aquamarine'
      },
      {
        color: 'hsl(180, 75%, 60%)',
        label: 'Turquoise'
      },
      {
        color: 'hsl(210, 75%, 60%)',
        label: 'Light blue'
      },
      {
        color: 'hsl(240, 75%, 60%)',
        label: 'Blue'
      },
      {
        color: 'hsl(270, 75%, 60%)',
        label: 'Purple'
      },
      {
        color: "hsl(360, 66%, 44%)",
        label: "#B82627",
      },
      {
        color: "hsl(196, 80%, 52%)",
        label: "#24B4E7",
      },
      {
        color: "hsl(36, 15%, 32%)",
        label: "#5E5445",
      },
      {
        color: "hsl(271, 12%, 34%)",
        label: "#564B60",
      },
      {
        color: "hsl(33, 11%, 40%)",
        label: "#70665A",
      },
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "es",
};