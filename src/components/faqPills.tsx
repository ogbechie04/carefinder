import React from "react";
import { Button } from "@chakra-ui/react";

function FaqPills({ pillText }) {
  return (
    <>
      <Button
        color={"#0E1AFB"}
        borderColor={"#0E1AFB"}
        paddingInline={8}
        paddingBlock={3}
        variant={"outline"}
        borderRadius={"2.8125rem"}
        height={"100%"}
        _hover={{
          textDecoration: "none",
          color: "#fff",
          bgColor: "#0E1AFB",
        }}
        transition={"all .5s ease"}
        bgColor={"white"}
        fontSize={"medium"}
        fontWeight={"normal"}
      >
        {pillText}
      </Button>
    </>
  );
}

export default FaqPills;
