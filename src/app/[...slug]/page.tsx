"use client";

import React from "react";
import { pageData } from "@/config/pageData";
import { ComponentData, DynamicPageData } from "@/type/type";
import { usePathname, useRouter } from "next/navigation";

const App = () => {
  const pathname = usePathname();
  const {
    components,
    style,
    type,
  }: { components: any; style: React.CSSProperties; type: any } = pageData;
  return (
    <div>
      <DynamicPage components={components} style={style} type={type} />
    </div>
  );
};

export default App;

// This component will render the correct component based on the components array

const DynamicPage = ({ type: Tag, components, style }: DynamicPageData) => {
  return (
    <Tag style={style}>
      {components.map((component, index) => {
        return <DynamicComponent key={index} {...component} />;
      })}
    </Tag>
  );
};

// This component will render the correct component based on the tag
const DynamicComponent = (props: ComponentData) => {
  const router = useRouter();
  const { type: Tag, content, style, components, src, action } = props;
  const handleActionClick = () => {
    if (action) {
      action(router);
    }
  };
  // If the component has children, render the DynamicPage component
  if (components) {
    return <DynamicPage components={components} style={style} type={Tag} />;
  }

  switch (Tag) {
    case "img":
      return <Tag style={style} src={src} />;
    case "button":
      return (
        <Tag router={router} style={style} onClick={handleActionClick}>
          {content}
        </Tag>
      );
    default:
      return <Tag style={style}>{content}</Tag>;
  }
};
