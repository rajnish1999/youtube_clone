import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "../SearchPage.css"
import ChannelRow from './ChannelRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
                image="https://picsum.photos/200/300"
                channel="Rajnish Programmer"
                verified
                subs="600M"
                noOfVideos={400}
                description="You can find awesome programming content here"
            />

            <hr />
        </div>
    )
}

export default SearchPage
