import React from 'react';

class Card extends React.Component {
    render() {
        let styles = {
          card: {
            border: '1px solid #fff',
            borderRadius: 5,
            backgroundColor: '#ff5508',
            display: 'block',
          },
          title: {
            color: "#fff",
            fontFamily: 'Helvetica Neue',
            margin: 0,
            padding: 10,
            "text-align": 'center',
          }
        };

        return (
            <div style={styles.card}>
                <h1 style={styles.title}>{this.props.title}</h1>
            </div>
        );
    }
}

export default Card;
