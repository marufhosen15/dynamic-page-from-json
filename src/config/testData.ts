const pages = [
  {
    title: "Home",
    url: "/",
    apis: [
      {
        url: "/api/landingpage",
        method: "get",
        data: "data.landingpage",
        renderType: "ssr",
      },
    ],
    component: [
      {
        index: 1,
        tag: "img",
        style: { marginTop: "5px", border: "4px dashed" },
        data: "data.landingpage.logo",
      },
      {
        index: 2,
        tag: "h2",
        style: { marginTop: "5px", border: "4px dashed" },
        data: "data.landingpage.comapanyName",
      },
    ],
  },
  {
    title: "test",
    url: "/test",
    apis: [
      {
        url: "/api/test/ssr",
        method: "get",
        data: "data.testSSR",
        renderType: "ssr",
      },
      {
        url: "/api/test/csr",
        method: "get",
        data: "data.testCSR",
        renderType: "csr",
      },
    ],
    component: [
      {
        index: 1,
        tag: "img",
        style: { marginTop: "5px", border: "4px dashed" },
        data: "data.testSSR.mizanPhoto",
      },
      {
        index: 2,
        tag: "p",
        style: { marginTop: "5px", border: "4px dashed" },
        data: "data.testCSR.leaderName",
      },
    ],
  },
];
