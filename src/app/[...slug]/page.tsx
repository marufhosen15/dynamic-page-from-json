"use client";

import React from "react";
import { pageData } from "@/config/pageData";
import { ComponentData, DynamicPageData } from "@/type/type";

const App = () => {
  const { components, style } = pageData;
  return <DynamicPage components={components} style={style} />;
};

export default App;

// This component will render the correct component based on the components array

const DynamicPage = ({ components, style }: DynamicPageData) => {
  return (
    <div style={style}>
      {components.map((component, index) => {
        return <DynamicComponent key={index} {...component} />;
      })}
    </div>
  );
};

// This component will render the correct component based on the tag
const DynamicComponent = ({
  type: Tag,
  content,
  style,
  components,
  src,
  action,
}: ComponentData) => {
  // If the component has children, render the DynamicPage component
  if (components) {
    return <DynamicPage components={components} style={style} />;
  }

  // Return the component with the correct tag
  switch (Tag) {
    case "img":
      return <Tag style={style} src={src} />;
    case "button":
      return (
        <Tag style={style} onClick={action}>
          {content}
        </Tag>
      );
    default:
      return <Tag style={style}>{content}</Tag>;
  }
};
