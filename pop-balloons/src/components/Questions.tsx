import { Button } from "@chakra-ui/button";
import { Stack, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
interface Props {
    equation: Array<number | string>;
}

const TextButtons: React.FC<Props> = ({ equation }) => {
    // You can now use equation in your component
    return (
        // align div center

        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgPosition='center'
            bgRepeat='no-repeat'
            mb={2}
        >
            <VStack spacing={4} align="center">
                <Button colorScheme='yellow' fontSize="50px" height="300px" width="300px"> {equation[0]}</Button>
                <Stack spacing={4} direction='row' align='center'>
                    <Button colorScheme='teal'  height="60px" width="200px">{equation[1]}</Button>
                    <Button colorScheme='teal'  height="60px" width="200px">{equation[2]}</Button>
                    <Button colorScheme='teal'  height="60px" width="200px">{equation[3]}</Button>
                    <Button colorScheme='teal'  height="60px" width="200px">{equation[4]}</Button>
                </Stack>
            </VStack>

        </Box>

    );
};

export default TextButtons;