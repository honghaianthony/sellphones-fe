import React from 'react';
import { Progress, Grid } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const RatingBar = () => {
	return (
		<Grid.Container xs={12} sm={3} gap={2}>
			<Grid className="flex w-96">
				<p className="text-sm mx-3">5</p>
				<Icon icon="emojione:star" className="mr-3" />
				<Progress color="success" value={100} />
			</Grid>
			<Grid className="flex w-96">
				<p className="text-sm mx-3">4</p>
				<Icon icon="emojione:star" className="mr-3" />
				<Progress color="success" value={75} />
			</Grid>
			<Grid className="flex w-96">
				<p className="text-sm mx-3">3</p>
				<Icon icon="emojione:star" className="mr-3" />
				<Progress color="success" value={50} />
			</Grid>
			<Grid className="flex w-96">
				<p className="text-sm mx-3">2</p>
				<Icon icon="emojione:star" className="mr-3" />
				<Progress color="success" value={25} />
			</Grid>
			<Grid className="flex w-96">
				<p className="text-sm mx-3">1</p>
				<Icon icon="emojione:star" className="mr-3" />
				<Progress color="success" value={0} />
			</Grid>
		</Grid.Container>
	);
};

export default RatingBar;
