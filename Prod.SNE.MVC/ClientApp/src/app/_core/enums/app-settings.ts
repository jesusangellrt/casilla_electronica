export const APP_INFO = {
  logo: "CMP",
  nombreDesc: "Sistema de Encuestas",
  nombreFooter: "Sistema de Encuestas Institucionales",
};
export const FILE_SETTINGS = {
  extensiones: [
    "application/pdf",
    "image/jpeg",
    "image/gif",
    "image/png",
    "application/docx",
    "video/mp4",
    "audio/mp3",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword"],
  maxFileSize: 100 * 1024 * 1024
}
export const URL_UPLOADTEMP = 'api/comun/subir-archivo-temp';

export const MENU_OPTIONS = [
  { label: "INICIO", to: "/", cod: "0000" }
];

export const RUTAS = {
};

export const REGEX_SETTINGS = {
  CORREO: "^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
  CELULAR: "^9[0-9]{8}$",
  RUC: "^(10|20)[0-9]{9}$",
  DNI: "^[0-9]{8}$"
};
export const LOADING_BAR_COLOR = "#dc3545";

//Editor configuration.
export const DecoupledInit = {
  defaultConfig: {
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
      borderColors: [
        {
          color: "#000000",
          label: "Black",
        },
        {
          color: "#4d4d4d",
          label: "Dim grey",
        },
        {
          color: "#999999",
          label: "Grey",
        },
        {
          color: "#e6e6e6",
          label: "Light grey",
        },
        {
          color: "#ffffff",
          label: "White",
          hasBorder: true,
        },
        {
          color: "#e64c4c",
          label: "Red",
        },
        {
          color: "#e6994c",
          label: "Orange",
        },
        {
          color: "#e6e64c",
          label: "Yellow",
        },
        {
          color: "#99e64c",
          label: "Light green",
        },
        {
          color: "#4ce64c",
          label: "Green",
        },
        {
          color: "#4ce699",
          label: "Aquamarine",
        },
        {
          color: "#4ce6e6",
          label: "Turquoise",
        },
        {
          color: "#4c99e6",
          label: "Light blue",
        },
        {
          color: "#4c4ce6",
          label: "Blue",
        },
        {
          color: "#994ce6",
          label: "Purple",
        },

        {
          color: "#ba2626",
          label: "#B82627",
        },
        {
          color: "#23b2e7",
          label: "#24B4E7",
        },
        {
          color: "#5e5445",
          label: "#5E5445",
        },
        {
          color: "#574c61",
          label: "#564B60",
        },
        {
          color: "#71675b",
          label: "#70665A",
        },
      ],
      backgroundColors: [
        {
          color: "#000000",
          label: "Black",
        },
        {
          color: "#4d4d4d",
          label: "Dim grey",
        },
        {
          color: "#999999",
          label: "Grey",
        },
        {
          color: "#e6e6e6",
          label: "Light grey",
        },
        {
          color: "#ffffff",
          label: "White",
          hasBorder: true,
        },
        {
          color: "#e64c4c",
          label: "Red",
        },
        {
          color: "#e6994c",
          label: "Orange",
        },
        {
          color: "#e6e64c",
          label: "Yellow",
        },
        {
          color: "#99e64c",
          label: "Light green",
        },
        {
          color: "#4ce64c",
          label: "Green",
        },
        {
          color: "#4ce699",
          label: "Aquamarine",
        },
        {
          color: "#4ce6e6",
          label: "Turquoise",
        },
        {
          color: "#4c99e6",
          label: "Light blue",
        },
        {
          color: "#4c4ce6",
          label: "Blue",
        },
        {
          color: "#994ce6",
          label: "Purple",
        },

        {
          color: "#ba2626",
          label: "#B82627",
        },
        {
          color: "#23b2e7",
          label: "#24B4E7",
        },
        {
          color: "#5e5445",
          label: "#5E5445",
        },
        {
          color: "#574c61",
          label: "#564B60",
        },
        {
          color: "#71675b",
          label: "#70665A",
        },
      ]
    },
    fontColor: {
      colors: [
        {
          color: "#000000",
          label: "Black",
        },
        {
          color: "#4d4d4d",
          label: "Dim grey",
        },
        {
          color: "#999999",
          label: "Grey",
        },
        {
          color: "#e6e6e6",
          label: "Light grey",
        },
        {
          color: "#ffffff",
          label: "White",
          hasBorder: true,
        },
        {
          color: "#e64c4c",
          label: "Red",
        },
        {
          color: "#e6994c",
          label: "Orange",
        },
        {
          color: "#e6e64c",
          label: "Yellow",
        },
        {
          color: "#99e64c",
          label: "Light green",
        },
        {
          color: "#4ce64c",
          label: "Green",
        },
        {
          color: "#4ce699",
          label: "Aquamarine",
        },
        {
          color: "#4ce6e6",
          label: "Turquoise",
        },
        {
          color: "#4c99e6",
          label: "Light blue",
        },
        {
          color: "#4c4ce6",
          label: "Blue",
        },
        {
          color: "#994ce6",
          label: "Purple",
        },

        {
          color: "#ba2626",
          label: "#B82627",
        },
        {
          color: "#23b2e7",
          label: "#24B4E7",
        },
        {
          color: "#5e5445",
          label: "#5E5445",
        },
        {
          color: "#574c61",
          label: "#564B60",
        },
        {
          color: "#71675b",
          label: "#70665A",
        },
      ],
    },
    fontBackgroundColor: {
      colors: [
        {
          color: "#000000",
          label: "Black",
        },
        {
          color: "#4d4d4d",
          label: "Dim grey",
        },
        {
          color: "#999999",
          label: "Grey",
        },
        {
          color: "#e6e6e6",
          label: "Light grey",
        },
        {
          color: "#ffffff",
          label: "White",
          hasBorder: true,
        },
        {
          color: "#e64c4c",
          label: "Red",
        },
        {
          color: "#e6994c",
          label: "Orange",
        },
        {
          color: "#e6e64c",
          label: "Yellow",
        },
        {
          color: "#99e64c",
          label: "Light green",
        },
        {
          color: "#4ce64c",
          label: "Green",
        },
        {
          color: "#4ce699",
          label: "Aquamarine",
        },
        {
          color: "#4ce6e6",
          label: "Turquoise",
        },
        {
          color: "#4c99e6",
          label: "Light blue",
        },
        {
          color: "#4c4ce6",
          label: "Blue",
        },
        {
          color: "#994ce6",
          label: "Purple",
        },

        {
          color: "#ba2626",
          label: "#B82627",
        },
        {
          color: "#23b2e7",
          label: "#24B4E7",
        },
        {
          color: "#5e5445",
          label: "#5E5445",
        },
        {
          color: "#574c61",
          label: "#564B60",
        },
        {
          color: "#71675b",
          label: "#70665A",
        },
        // {
        //   color: 'hsl(0, 0%, 0%)',
        //   label: 'Black'
        // },
        // {
        //   color: 'hsl(0, 0%, 30%)',
        //   label: 'Dim grey'
        // },
        // {
        //   color: 'hsl(0, 0%, 60%)',
        //   label: 'Grey'
        // },
        // {
        //   color: 'hsl(0, 0%, 90%)',
        //   label: 'Light grey'
        // },
        // {
        //   color: 'hsl(0, 0%, 100%)',
        //   label: 'White',
        //   hasBorder: true
        // },
        // {
        //   color: 'hsl(0, 75%, 60%)',
        //   label: 'Red'
        // },
        // {
        //   color: 'hsl(30, 75%, 60%)',
        //   label: 'Orange'
        // },
        // {
        //   color: 'hsl(60, 75%, 60%)',
        //   label: 'Yellow'
        // },
        // {
        //   color: 'hsl(90, 75%, 60%)',
        //   label: 'Light green'
        // },
        // {
        //   color: 'hsl(120, 75%, 60%)',
        //   label: 'Green'
        // },
        // {
        //   color: 'hsl(150, 75%, 60%)',
        //   label: 'Aquamarine'
        // },
        // {
        //   color: 'hsl(180, 75%, 60%)',
        //   label: 'Turquoise'
        // },
        // {
        //   color: 'hsl(210, 75%, 60%)',
        //   label: 'Light blue'
        // },
        // {
        //   color: 'hsl(240, 75%, 60%)',
        //   label: 'Blue'
        // },
        // {
        //   color: 'hsl(270, 75%, 60%)',
        //   label: 'Purple'
        // },
        // {
        //   color: "hsl(360, 66%, 44%)",
        //   label: "#B82627",
        // },
        // {
        //   color: "hsl(196, 80%, 52%)",
        //   label: "#24B4E7",
        // },
        // {
        //   color: "hsl(36, 15%, 32%)",
        //   label: "#5E5445",
        // },
        // {
        //   color: "hsl(271, 12%, 34%)",
        //   label: "#564B60",
        // },
        // {
        //   color: "hsl(33, 11%, 40%)",
        //   label: "#70665A",
        // },
      ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: "es",
  },
  configEditor: {
    language: 'es',
    pagination: {
      // A4
      pageWidth: '21cm',
      pageHeight: '29.7cm',
      pageMargins: {
        top: '20mm',
        bottom: '20mm',
        left: '12mm',
        right: '12mm'
      }
    }
  }
};
