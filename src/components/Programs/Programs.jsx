// import css
import './Programs.css';
// import functions
import React from 'react';
import { Link } from 'react-router-dom';
import {programs} from '../../data';
// import icons
import { FaCrown } from 'react-icons/fa';
import {AiFillCaretRight} from 'react-icons/ai'
// import components
import SectionHead from '../SectionHead/SectionHead';
// import UI
import Card from '../../UI/Card/Card'

function Programs() {
	return (
		<section className='programs'>
			<div className='container programs__container'>
				<SectionHead icon={<FaCrown />} title="Programs" />
			
			<div className="programs__wrapper">
		    {
					programs.map(({id, icon, title, info, path}) => {
						return (
							<Card className="programs__program" key={id}>
								<span>{icon}</span>
								<h4>{title}</h4>
								<small>{info}</small>
								<Link to={path} className='btn sm'>Learn More <AiFillCaretRight /></Link>
							</Card>
						)
					})
				}
			</div>
			</div>
		</section>
	);
}

export default Programs;
