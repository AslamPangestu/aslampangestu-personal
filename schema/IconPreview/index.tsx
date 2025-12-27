import { Icon } from "@iconify/react";

interface Props {
  title: string;
}

const IconPreview = ({ title }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Icon icon={title} width="1.5em" />
    </div>
  );
};

export default IconPreview;
