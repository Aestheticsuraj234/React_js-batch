import React, { useEffect, useState } from 'react'
import Avatar from './Avatar'
import ProfileStatus from './ProfileStatus'
import FollwersCardList from './FollwersCardList'
import toast from 'react-hot-toast';

const Profile = () => {
    const [userData , setUserData] = useState({})
    const [followers , setFollowers] = useState([])


    async function FetchData(){
        try {

            let response = await fetch("https://api.github.com/users/Aestheticsuraj234")

            let data = await response.json()
            
            setUserData(data)
            toast.success('Data Fetched Successfully')
            
        } catch (error) {
            console.log(error)
            toast.error('Failed to Fetch Data')
            
        }
    }

    async function FetchFollwers(){
        try {

            let response = await fetch("https://api.github.com/users/Aestheticsuraj234/followers")

            let data = await response.json()
            
            setFollowers(data)
            toast.success('Data Fetched Successfully')
            
        } catch (error) {
            console.log(error)
            toast.error('Failed to Fetch Data')
            
        }
    
    }

    useEffect(()=>{
        FetchData()
        FetchFollwers()
    },[])


    return (
        <div className='flex flex-col justify-center items-center gap-11 mt-5 '>
            <Avatar
                url={userData?.avatar_url}
                username={userData?.login}
            />

            <ProfileStatus
                follwers={userData?.followers}
                following={userData?.following}
            />


            <div className={`   grid  grid-cols-1  md:grid-cols-3  gap-4  w-full px-4 py-2  `}>


{
    followers && followers.map((follower)=>(
        <FollwersCardList
        key={follower.id}
        loginName={follower.login}
        avatar={follower?.avatar_url}
        follwers={20}
        following={10}
        repoUrl={follower.repos_url}
    />
   
    ))
}

              
            </div>

        </div>
    )
}

export default Profile