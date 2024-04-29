import * as React from 'react';
import { styled } from '@mui/material/styles';
import PlusIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `0px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<PlusIcon sx={{ fontSize: '0.9rem'}} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomizedAccordions = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Material Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ace the sporty look with these Basic Men's Red Trackpants. Team it up with a hooded jacket, basic t-shirt and sports shoes for the athleisure look.
                        Country of Origin - India

                        Manufactured By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302

                        Packed By - Bewakoof Brands Pvt Ltd, Sairaj Logistic Hub #A5, Bmc Pipeline Road, Opposite All Saints High School, Amane, Bhiwandi, Thane, Maharashtra - 421302

                        Commodity - Men's Track Pant

                        Product Specifications

                        Regular fit - Fits just right - not too tight, not too loose.
                        polycotton - Light Weight, Soft & Durable
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Product Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Product Description
                        Shop for TSS Originals: Problem Child T-Shirts at The Souled Store.

                        MRP: Rs. 999/- incl. of all taxes.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Return & Exchange</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Easy returns upto 15 days of delivery. Exchange available on select pincodes
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default CustomizedAccordions;