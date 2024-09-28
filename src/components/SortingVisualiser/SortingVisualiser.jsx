
import React , {Component} from 'react';
import { Grid , Box , Button} from '@material-ui/core';
import {getMergeSortAnimations , getBubbleSortAnimations , getInsertionSortAnimations} from '../SortingAlgorithm/SortingAlgorithm';
import './SortingVisualiser.css';

const ANIMATION_SPEED_MS = 5;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = 'blue';
const SECONDARY_COLOR = 'yellow';

class SortingVisualiser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: []
        }
    }
    componentDidMount() {
        this.resetArray();
    }
    resetArray = () => {
        const array = [];
        for( let i=0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(1 , 100));
        }
        this.setState({array});
    }
    mergeSortArray = () => {
        //console.log(this.state.array);
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * (ANIMATION_SPEED_MS*10));
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}%`;
            }, i * (ANIMATION_SPEED_MS*10));
            }
        }
    }
    insertionSortArray = () => {
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 === 0 || i % 4 === 3;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}%`;
                }, i * ANIMATION_SPEED_MS);
                }
            }
    }
    bubbleSortArray = () => {
        console.log(this.state.array);
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 4 === 0 || i % 4 === 3;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}%`;
            }, i * ANIMATION_SPEED_MS);
            }
        }
    }
    render() {
        return (
            <>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
            style={{height: '70%' , padding: '20px'}}>
            {this.state.array.map((value , idx) => (
                <Box className="array-bar" key={idx}
                style={{height: `${value}%`}}>
                </Box>
            ))
            }
            </Grid>
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}>
            <Grid item>
                <Button variant="outlined" color="secondary" onClick={this.resetArray}>Generate New Array</Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="secondary" onClick={this.insertionSortArray}>Insertion Sort</Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="secondary" onClick={this.mergeSortArray}>Merge Sort</Button>
            </Grid>
            <Grid item>
                <Button variant="outlined" color="secondary" onClick={this.bubbleSortArray}>Bubble Sort</Button>
            </Grid>
            </Grid>
            </>
        );
    }
}

function randomIntFromInterval(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualiser;