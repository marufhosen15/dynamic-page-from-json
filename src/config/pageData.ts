import { handleAction } from "./actions/actions";
import TestComponent from "../components/TestComponent";

// pageData.json
export const pageData = {
  title: "My Dynamic Page",
  metadata: {
    description: "This is a dynamic page, what I rendered from JSON",
    keywords: "dynamic, page, json, react",
  },
  type: "div",
  style: {
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
    display: "flex",
    gap: "20px",
    padding: "20px",
    // border: "1px solid #ccc",
  },
  components: [
    {
      id: "box-1",
      type: "div",
      content: "This is a dynamic div component, what I rendered from JSON 01",
      style: {
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        padding: "10px",
        width: "50%",
        margin: "0 auto",
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1692890846581-da1a95435f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" +
          ")",

        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "auto",
      },
      components: [
        {
          id: "box-1",
          type: "img",
          src: "https://images.unsplash.com/photo-1692890846581-da1a95435f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
          style: {
            width: "100%",
            height: "50%",
            objectFit: "cover",
          },
        },
        {
          id: "box-2",
          type: "span",
          style: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "5px",
          },
          components: [
            {
              id: "box-1",
              type: "div",
              style: {
                width: "60%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "10px",
              },
              components: [
                {
                  type: TestComponent,
                  content: "Card Title 01",
                  style: {
                    color: "purple",
                    fontSize: "20px",
                  },
                },
                {
                  type: "p",
                  content:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
                  style: {
                    color: "black",
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                  },
                },
                {
                  id: "box-3",
                  type: "button",
                  content: "Buy Now",
                  action: handleAction,
                  style: {
                    backgroundColor: "purple",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    width: "150px",
                  },
                },
              ],
            },
            {
              id: "box-2",
              type: "div",
              content: `Price: $${1000}`,
              style: {
                color: "green",
              },
            },
          ],
        },
        {
          id: "box-3",
          type: "div",
          style: {
            borderTop: "1px solid #ccc",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
          components: [
            {
              id: "box-3",
              type: "div",
              content: `Rating: 4.5`,
              style: {},
            },
            {
              id: "box-3",
              type: "button",
              style: {
                backgroundColor: "#aeaeae",
                fontWeight: "normal",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "5px",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid gray",
              },
              components: [
                {
                  id: "box-1",
                  type: "span",
                  content: "Share",
                  action: handleAction,
                },
                {
                  id: "box-2",
                  type: "img",
                  src: "/share.png",
                  style: {
                    width: "20px",
                    height: "20px",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// {
//   id: "box-2",
//   type: "div",
//   content: "This is a dynamic div component, what I rendered from JSON 02",
//   style: {
//     backgroundColor: "#f0f0f0",
//     fontSize: "18px",
//     border: "1px solid #ccc",
//     padding: "10px",
//     width: "50%",
//     margin: "0 auto",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "row",
//     gap: "20px",
//   },
//   components: [
//     {
//       id: "box-1",
//       type: "span",
//       content:
//         "This is a dynamic span component, what I rendered from JSON 01",
//       style: {
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         padding: "20px",
//       },
//     },
//     {
//       id: "box-2",
//       type: "span",
//       content:
//         "This is a dynamic span component, what I rendered from JSON 02",
//       style: {
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         padding: "20px",
//       },
//     },
//   ],
// },
