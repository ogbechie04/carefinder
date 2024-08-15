import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Box, Button } from "@chakra-ui/react";
import '../index.css'

interface MarkdownEditorProps {
    onSave: (markdownContent: string) => void;
  }

  const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onSave }) => {
    const [value, setValue] = useState<string>("");

    const handleEditorChange = (newValue?: string) => {
      setValue(newValue || "");
    };

  return (
    <Box display={"flex"} flexDirection={"column"} gap={6}>
      <MDEditor value={value} onChange={handleEditorChange} height={500} />
      <Button
        fontFamily={"Open Sans"}
        color={"white"}
        bgColor={"#0E1AFB"}
        paddingInline={8}
        paddingBlock={3}
        variant={"solid"}
        borderRadius={"1.75rem"}
        _hover={{ textDecoration: "none", bgColor: "#030EDD" }}
        transition={"all 0.5s ease"}
        alignSelf={"center"}
        onClick={() => onSave(value)}
      >
        Save Hospital
      </Button>
    </Box>
  );
};

export default MarkdownEditor;
