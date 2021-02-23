import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import "../SearchPage.css"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow';

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
            
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            /><VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
            <VideoRow 
                views='1.4M'
                subs='600M'description='You can find awesome programming content here'
                timestamp='59 seconds ago'
                channel='Rajnish Programmer'
                title="©️ Let's buid a youtube clone using react js"
                image='https://picsum.photos/200/300'
            />
        </div>
    )
}

export default SearchPage
