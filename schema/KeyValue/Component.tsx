import { useCallback, useMemo } from "react";
import { Box, Flex } from "@sanity/ui";
import { MemberField } from "sanity";
import type {
  FieldMember,
  ObjectInputProps,
  RenderFieldCallback,
} from "sanity";

const DurationInput = (props: ObjectInputProps) => {
  const { members, renderInput, renderItem, renderPreview } = props;

  const fieldMembers = useMemo(
    () => members.filter((mem) => mem.kind === "field") as FieldMember[],
    [members],
  );

  const key = fieldMembers.find((mem) => mem.name === "key");
  const value = fieldMembers.find((mem) => mem.name === "value");

  const renderField: RenderFieldCallback = useCallback(
    (props) => props.children,
    [],
  );

  const renderProps = useMemo(
    () => ({ renderField, renderInput, renderItem, renderPreview }),
    [renderField, renderInput, renderItem, renderPreview],
  );

  return (
    <Flex align="center" gap={3}>
      <Box flex={1}>{key && <MemberField {...renderProps} member={key} />}</Box>
      <Box flex={1}>
        {value && <MemberField {...renderProps} member={value} />}
      </Box>
    </Flex>
  );
};

export default DurationInput;
