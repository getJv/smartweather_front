import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PubSub from 'pubsub-js';

export default class GridComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { list: this.props.data.forecast.forecastday }
    }


    componentWillMount() {
        this.setState({ list: this.props.data.forecast.forecastday })
    }



    render() {

        return (
            <div className="pure-g">
                     {

this.state.list.map((item) => {
    return (
        <div key={item.date} className="pure-u-1-2">
            <Card >
                <CardActionArea>
                    <img src={item.day.condition.icon} alt={item.day.condition.text} />
                    {new Date(item.date + "T00:00:00").toDateString()}
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h5">
                            {item.day.condition.text}
                        </Typography>
                        <Typography component="p">
                            Temperature : {item.day.avgtemp_c} <small>(avg celsius)</small>
                        </Typography>
                        <Typography component="p">
                            Preciptation: {item.day.avgtemp_c} <small>(avg mm)</small>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
</Button>
                    <Button size="small" color="primary">
                        Learn More
</Button>
                </CardActions>
            </Card>
        </div>


    );
})

}
               

            </div>
        );
    }


}


