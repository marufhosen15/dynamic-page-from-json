import { ComponentData, DynamicPageData } from "@/type/type";
import { useRouter } from "next/navigation";

// This component will render the correct component based on the components array
export const DynamicPage = ({
  type: Tag,
  components,
  style,
}: DynamicPageData) => {
  return (
    <Tag style={style}>
      {components?.map((component, index) => {
        return <DynamicComponent key={index} {...component} />;
      })}
    </Tag>
  );
};

// This component will render the correct component based on the tag
export const DynamicComponent = (props: ComponentData) => {
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
