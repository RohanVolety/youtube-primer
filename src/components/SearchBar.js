import {Box,Button,TextInput,} from "@primer/react";
const SearchBar = () => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={4}
        padding={2}
        mt={2}

    >
        <TextInput
            placeholder="Search for videos..."
            style={{ borderRadius: "4px",width: "300px" }}
        />
        <Button
            size="small"
            ml={2}
            sx={{
                backgroundColor: "green",
                color: 'white',
                ':hover': {
                    backgroundColor: 'success.dark',
                },
                marginLeft: "8px",
                borderRadius: "4px",
                fontStyle: "bold"
            }}
        >
            Search
        </Button>
    </Box>
);

export default SearchBar;