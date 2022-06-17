import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    Tag,
    SpaceProps,
    useColorModeValue,
    Container,
} from '@chakra-ui/react';
import Layouts from '../../../../components/Layouts';
// import { ref, onValue, getDatabase, query, get, child } from 'firebase/database'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../../../firebase/config';
import {
    collection, query, orderBy, onSnapshot
} from 'firebase/firestore'
import { dbFirestore } from '../../../../firebase'
import CardProject, { ICardProject } from '../../../../components/CardProject';

interface IProjects {
    data: ICardProject[],
    id: number
}
const Profile = (props: any) => {
    const [projects, setProjects] = useState<any []>([])
    // const [data, setData] = useState({})
    const myFirebase = initializeApp(firebaseConfig)
    // const databaseInit = getDatabase(myFirebase)

    const getAllProjects = () => {
        //with realtime db
        // const dbRef = ref(databaseInit);
        // get(child(dbRef, 'projects')).then((snapshot) => {
        // if (snapshot.exists()) {
        //     let keyName = snapshot.key;
        //     let data = snapshot.val()
        //     console.log('key name ', keyName)
        //     console.log('datanya cuy ', data.SW0ThquOIYbfJro5iMFIwq3LjQB2)
        // } else {
        //     console.log("No data available");
        // }
        // }).catch((error) => {
        // console.error(error);
        // });

        // with firestore
        const q = query(collection(dbFirestore, 'projects'), orderBy('created', 'desc'))
        onSnapshot(q, (querySnapshot: any) => {
            let dataProjects:any = []
            querySnapshot.docs.map((doc: any) => {
                dataProjects.push(
                    {...doc.data(), id: doc.id}
                )
            })
            setProjects(dataProjects)
        })

    }

    useEffect(() => {
        getAllProjects()
    }, [])
    return (
        <Layouts>
            <Link to="/detail">
                <Container maxW={'6xl'} mb={10}>
                   {
                    projects?.map((item, index) => (
                        <div key={index}>
                            <CardProject
                                id={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))
                   }
                </Container>
            </Link>
        </Layouts>
    )
}

function mapStateToProps(state: any) {
    return {
        isLoggingOut: state.auth.isLoggingOut,
        logoutError: state.auth.logoutError
    };
}

export default connect(mapStateToProps)(Profile);