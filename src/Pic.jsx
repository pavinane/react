import React from 'react';

// class Pic extends React.Component{
//     state = {
//         photoDisplay:false
//     };
//     showPhoto =  () => this.setState (({ photoDisplay }) => ({ photoDisplay: !photoDisplay }));

//     render () {
//         const { photoDisplay } = this.state;
//         return(
//             <div className="photo">
//                  <button type="button" onClick={this.showPhoto}>
//                  {photoDisplay ? "Hide Photo" : "Show Photo"}
//                  </button>
//                 {photoDisplay && (
//                     <img src="https://placeimg.com/500/200/cars" alt=""/>
//                 )}
//             </div>
//         );
//     }
// }


class Pic extends React.Component{
    state = {
        photoDisplay:false
    };
    showPhoto =  () => this.setState (({ photoDisplay }) => ({ photoDisplay: !photoDisplay }));

    render () {
        const { photoDisplay } = this.state;
        return(
            <div className="photo">
                 <button type="button" onClick={this.showPhoto}>
                 {photoDisplay ? "Hide Photo" : "Show Photo"}
                 </button>
                {photoDisplay && (
                    <img src="https://placeimg.com/500/200/cars" alt=""/>
                )}
            </div>
        );
    }
}
export default Pic;


