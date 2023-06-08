import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import React, { ChangeEvent, FC, useRef } from "react";

interface ImageUploadProps {
  selectedFile?: string;
  onSelectImage: (e: ChangeEvent<HTMLInputElement>) => void;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
}

export const ImageUpload: FC<ImageUploadProps> = ({
  selectedFile,
  setSelectedFile,
  onSelectImage,
  setSelectedTab,
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);

  return (
    <Flex justify="center" align="center" width="100%" direction="column">
      {selectedFile ? (
        <>
          <Image
            src={selectedFile}
            maxWidth="400px"
            maxHeight="400px"
            alt="image"
          />
          <Stack direction="row" mt={4}>
            <Button h="28px" onClick={() => setSelectedTab("Post")}>
              Back to Post
            </Button>
            <Button
              variant="outline"
              height="28px"
              onClick={() => setSelectedFile("")}
            >
              Remove
            </Button>
          </Stack>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="gray.200"
          width="100%"
          borderRadius={4}
        >
          <Button
            variant="outline"
            height="28px"
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={selectedFileRef}
            type="file"
            hidden
            onChange={onSelectImage}
          />
        </Flex>
      )}
    </Flex>
  );
};
