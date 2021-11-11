import React from "react";
import LeaderCard from "../LeaderCard/LeaderCard";
import {data_leaders} from '../../data_leaders';
import '../LeadersAbout/leadersAbout.css';

const LeadersAbout = () => {
    return (
        <section className='leaders'>
            <div className='leaders__container'>
                <h2 className='leaders__left'>
                    The
                    <br />
                    Leaders
                </h2>

                <div className='leaders__right'>
                    {data_leaders.map((item) => {
                        return (
                            <LeaderCard
                                src={item.image}
                                h3={item.h3}
                                p={item.p}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default LeadersAbout;