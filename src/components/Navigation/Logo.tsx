import React from "react"
import { Box } from "@chakra-ui/react"

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <img src="./img/logosunbox.png" alt="sunbox" width={100} height={40} />
    </Box>
  )
}