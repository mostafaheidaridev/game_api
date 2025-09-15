import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner m={4} />;

  return (
    <List spacing={3} px={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              src={genre.image_background}
              alt={genre.name}
              boxSize="40px"
              borderRadius={8}
              objectFit="cover"
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;