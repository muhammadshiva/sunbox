import React from 'react'
import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    Tag,
    SpaceProps,
    useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IBlogTags {
    tags: Array<string>,
    marginTop?: SpaceProps['marginTop'],
}

export interface ICardProject {
    id: string,
    title: string,
    description: string,
    price?: number
}

const BlogTags: React.FC<IBlogTags> = (props) => {
    return (
        <HStack spacing={2} marginTop={props.marginTop}>
            {props.tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                );
            })}
        </HStack>
    );
}

const CardProject = ({ title, description, id }: ICardProject) => {
    return (
        <Link to={`/product/${id}`}>
        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between"
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">
                <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%">
                    <Image
                        borderRadius="lg"
                        src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                        alt="some good alt text"
                        objectFit="contain"
                    />
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                        bgGradient={useColorModeValue(
                            'radial(orange.600 1px, transparent 1px)',
                            'radial(orange.300 1px, transparent 1px)'
                        )}
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}>
                <BlogTags tags={['Engineering', 'Product']} />
                <Heading marginTop="1">
                    {title}
                </Heading>
                <Text
                    as="p"
                    marginTop="2"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    fontSize="lg"
                    style={{
                        display: 'block',
                        textOverflow: 'ellipsis',
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        maxHeight: '120px',
                        lineHeight: '30px'
                    }}
                >
                   {description} 
                </Text>
            </Box>
        </Box>
        </Link>
    )
}

export default CardProject