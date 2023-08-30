export interface ComponentData {
  type: any;
  content?: string;
  style?: React.CSSProperties;
  components?: ComponentData[];
  src?: string;
  alt?: string;
  href?: string;
  action?: any;
}

export interface DynamicPageData {
  components: ComponentData[];
  style: React.CSSProperties | undefined;
  index?: number;
  type: any;
}
