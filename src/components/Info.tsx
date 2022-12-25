// style using bootstrap
import React from 'react';
import { useEffect } from 'react';
import { SlGlobe, SlSocialGithub, SlSocialTwitter } from 'react-icons/sl';

class AlertContent {
    title: string;
    message: string;
    constructor(title: string, message: string) {
        this.title = title;
        this.message = message;
    }
}

function Alert(props: AlertContent) {
    return (
        <div className="alert alert-danger fade show" role="alert">
            <p className="mb-0">
                <strong className='text-decoration-underline'>{props.title}!</strong> {props.message}
            </p>
        </div>
    );
}

class Username {
    username: string;
    constructor(username: string) {
        this.username = username;
    }
}

function Info(props: Username) {
    // console.log(props);
    // Get the username from the props
    const username = props.username.toLowerCase().trim();

    // Get GitHub info using the github API in a variable data
    const [data, setData] = React.useState<any>([]);
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            // .catch((error) => {
            //     console.error('Error:', error);
            // });
    }, [username]);
    console.log(data);

    return (
        data.message === 'Not Found' ? <Alert title='Error' message='User not found' /> : (
            props.username === '' ? <Alert title='Error' message='Please enter a username' /> : (
                <div className='py-4'>
                    <div className='card mx-auto' style={{ maxWidth: '24rem' }}>
                        <img src={data.avatar_url} className="card-img-top border-2 border-dark pb-0 mb-1" alt={`${username}'s profile`} />
                        <div className='card-body'>
                            <h1 className='text-dark fs-4 mb-0'>{data.name}</h1>
                            <h2 className='mb-2 text-muted fs-6 fw-normal'>{username}</h2>
                            <p className='card-text'></p>
                            <p className='card-text text-body'>{data.bio}</p>
                            <hr className='text-dark'/>
                            {/* Repository, Followers, Following count */}
                            <div className='d-flex justify-content-around my-2'>
                                <div className='d-flex flex-column'>
                                    <span className='text-muted fs-6'>
                                        <a href={`${data.html_url}?tab=repositories`} className="text-link link-secondary text-decoration-none" target='_blank' rel='noreferrer'>
                                            Repositories
                                        </a>
                                    </span>
                                    <span className='text-dark fs-5'>{data.public_repos}</span>
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='text-muted fs-6'>
                                        <a href={`${data.html_url}?tab=followers`} className="text-link link-secondary text-decoration-none" target='_blank' rel='noreferrer'>
                                            Followers
                                        </a>
                                    </span>
                                    <span className='text-dark fs-5'>{data.followers}</span>
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='text-muted fs-6'>
                                        <a href={`${data.html_url}?tab=following`} className="text-link link-secondary text-decoration-none" target='_blank' rel='noreferrer'>
                                            Following
                                        </a>
                                    </span>
                                    <span className='text-dark fs-5'>{data.following}</span>
                                </div>
                            </div>
                            <hr className='text-dark'/>
                            {/* Links */}
                            <div className='d-flex justify-content-around'>
                                <a href={data.html_url} className='link-primary text-decoration-none' target='_blank' rel='noreferrer'>
                                    <span className='p-1'>
                                        <SlSocialGithub />
                                    </span>
                                    GitHub
                                </a>
                                {
                                    data.blog !== "" &&
                                    <a href={data.blog} className='link-primary text-decoration-none' target='_blank' rel='noreferrer'>
                                    <span className='p-1'>
                                        <SlGlobe />
                                    </span>
                                    Blog
                                </a>
                                }
                                {
                                    data.twitter_username !== null &&
                                    <a href={`https://twitter.com/${data.twitter_username}`} className='link-primary text-decoration-none' target='_blank' rel='noreferrer'>
                                        <span className='p-1'>
                                            <SlSocialTwitter />
                                        </span>
                                        Twitter
                                    </a>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            )
        )
    );
}

export default Info;
