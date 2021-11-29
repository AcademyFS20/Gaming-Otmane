import React from 'react';
import '../index.css'
const About = () => {
    return (
        <div className="about">
            <h1>How we are?</h1>
            <h2>Crea games</h2>
            <div>
                <img src={require('../assets/logo.jpg').default}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id arcu eu nulla imperdiet fermentum ac quis lectus. Nulla ultricies lacus ut risus semper, a ultricies lectus congue. Nulla et rutrum orci. Maecenas eget erat sit amet neque venenatis dapibus. Aenean dui metus, congue eget vehicula eu, iaculis at ligula. Cras libero lacus, imperdiet non turpis vitae, efficitur porttitor felis.<br/> 
                    Pellentesque ultrices volutpat blandit. Maecenas vel tellus non libero hendrerit eleifend.Duis a tempor magna. Nunc accumsan ligula sed aliquam sagittis. Fusce rutrum, est non venenatis lobortis, tellus arcu condimentum leo, id efficitur dui enim tincidunt purus.<br/> 
                    Sed sed ex vel elit venenatis elementum. Suspendisse cursus, massa cursus tincidunt fermentum, purus metus accumsan enim, vel feugiat justo odio in dui. Mauris et purus id ex finibus egestas. Morbi id metus vel tellus ornare semper id ac nunc. Etiam aliquet dignissim enim, ut facilisis erat mattis sed. Etiam fermentum ipsum nunc, sed imperdiet nisl posuere acEtiam condimentum nisi magna, eget molestie dui facilisis eget. Donec eget magna dignissim, pellentesque dui nec, imperdiet arcu. Praesent aliquet a magna quis tristique. Donec eget lacus fringilla, facilisis neque sit amet, dignissim nisl. Mauris efficitur purus at lacus sodales volutpat. Nulla consequat mauris at semper tristique. Duis odio magna, viverra at elit et, semper vehicula eros. Donec id viverra erat. Suspendisse euismod nibh quis nisl fermentum luctus.</p>
            </div>
        </div>
    );
};

export default About;