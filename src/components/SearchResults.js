const SearchResults = ({ userDetails }) =>{
    let months =  ["Jan","Feb","March","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
    
    let joinDate = new Date(userDetails.created_at)
    let date = joinDate.getDate()
    let month = joinDate.getMonth()
    let year = joinDate.getFullYear()
    console.log(date,month,year)
    return(
    <div className="container">
        <img src={userDetails.avatar_url} alt="" />
        <div className="wrapper">
            <div className="profile-info">
                <div className="names">
                    <h3>{userDetails.name}</h3>
                    <p className="username">@{userDetails.login}</p>
                    <p className="bio">{userDetails.bio === null ? 'This profile has no bio' : userDetails.bio}</p>
                </div>
                <p className="date-joined">Joined {`${date} ${months[month + 1]} ${year}`}</p>
            </div>
            <div className="git-info">
                <div className="repo">
                    <h3>Repo</h3>
                    <p>{userDetails.public_repos}</p>
                </div>
                <div className="followers">
                    <h3>Followers</h3>
                    <p>{userDetails.followers}</p>
                </div>
                <div className="following">
                    <h3>Following</h3>
                    <p>{userDetails.following}</p>
                </div>
            </div>
            <footer>
                <ul>
                    <li ><i className="fas fa-map-marker-alt"></i>{userDetails.location}</li>
                    <li><i className="fab fa-twitter" ></i>{userDetails.twitter_username}</li>
                    <li className="link"><i className="fas fa-link"></i><a href={userDetails.blog}>{userDetails.blog}</a></li>
                    <li><i className="fas fa-building" style={{color: userDetails.company === null ? "#ccc" : "fff"}}></i>{userDetails.company === null ? "Not Available" : userDetails.company}</li>
                </ul>
            </footer>
        </div>
    </div>
    );
}

export default SearchResults