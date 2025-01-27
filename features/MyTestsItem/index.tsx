import Link from "next/link";
import {Flex, IconButton, Text} from "@chakra-ui/react";
import {EllipsisIcon, PencilIcon, RadioIcon, TrashIcon} from "lucide-react";
import {Tag} from "@/components/ui/tag";
import ContentItem from "@/components/ui/content-item";
import {Tooltip} from "@/components/ui/tooltip";
import {MenuContent, MenuItem, MenuRoot, MenuTrigger} from "@/components/ui/menu";

const styles = {
  contentItem: {
    _hover: {
      "& .buttons": {
        opacity: 1,
        pointerEvents: "all",
      },
    },
  },
  title: {
    paddingBottom: "4",
    fontSize: "lg",
    fontWeight: "semibold",
    flexGrow: 1,
  },
  description: {
    gap: 6,
    fontSize: "xs",
    color: "fg.subtle",
    "&.published": {
      color: "fg.muted",
    },
    edited: {
      color: "fg.subtle",
      flexGrow: 1,
      textAlign: "right",
    },
  },
  buttons: {
    marginRight: -2,
    gap: 1,
    opacity: 0,
    pointerEvents: "none",
    transition: "opacity",
    transitionTimingFunction: "ease-in",
  }
};

const MyTestsItem = ({
                       title = "",
                       questions = {},
                       results = {},
                       edited = "",
                       published = false,
                     }) => (
    <Link href="/test-edit/" passHref>
      <ContentItem {...styles.contentItem}>
        <Flex gap={2}>
          <Text {...styles.title}>{title}</Text>
          <Flex {...styles.buttons} className={"buttons"}>
                <IconButton size="xs" colorPalette="blue" variant="ghost" asChild>
                  <Link href="/test-edit/2"><PencilIcon/></Link>
                </IconButton>
            <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                role="presentation"
            >
              <MenuRoot>
                <MenuTrigger asChild>
                  <IconButton size="xs" colorPalette="blue" variant="ghost"> <EllipsisIcon/></IconButton>
                </MenuTrigger>
                <MenuContent>
                  <MenuItem value="edit"><TrashIcon size={16}/>Remove</MenuItem>
                </MenuContent>
              </MenuRoot>
            </div>
          </Flex>
        </Flex>
        <Flex {...styles.description} className={`${published ? "published" : ""}`}>
          {!published ? (
              <Tag variant="surface" size="sm" colorPalette="gray">Draft</Tag>
          ) : (
              <Tag startElement={<RadioIcon/>} variant="solid" size="sm" colorPalette="green">Published</Tag>
          )}
          <Text>{questions} questions</Text>
          {published && <Text>{results} results</Text>}
          {edited && <Text {...styles.description.edited}>Edited {edited}</Text>}
        </Flex>
      </ContentItem>
    </Link>
)

export default MyTestsItem;