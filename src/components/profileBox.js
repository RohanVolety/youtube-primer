import React from "react";
import { Box, Text, IconButton } from "@primer/react";
import { PersonFillIcon, PencilIcon, BellIcon } from "@primer/octicons-react";

const ProfileBox = () => {
    return (
        <Box display="flex" justifyContent="flex-end" alignItems="center">

            <Text mr={2}>Rohan Volety</Text>


            <IconButton>
                <PersonFillIcon size={16} />
            </IconButton>


            <IconButton sx={{ ml: 2 }}>
                <PencilIcon size={16} />
            </IconButton>


            <IconButton sx={{ ml: 2 }}>
                <BellIcon size={16} />
            </IconButton>
        </Box>
    );
};

export default ProfileBox;
