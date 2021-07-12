import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import LockIcon from '@material-ui/icons/Lock';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '60%',
        width: '60%',
    },
    upper: {
        position: 'relative',
        height: '30%',
        backgroundColor: '#e0f7fa',
        zIndex: '0',
    },
    personImage: {
        position: 'relative',
        width: '18%',
        bottom: '5rem',
        left: '40%',
    },
    large: {
        width: theme.spacing(16),
        height: theme.spacing(16),
    },
    middle: {
        height: '20%',
        position: 'relative',
        bottom: '3rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icons: {
        height: '20%',
        width: '100%',
        position: 'relative',
        bottom: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    h2: {
        color: '#555',
        letterSpacing: '1.5px',
    },
    icon: {
        color: '#42a5f5',
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    btn: {
        position: 'relative',
        bottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width: '100%',
    },
    loader: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const url = 'https://randomuser.me/api/';

const defaultvalue = {
    name: 'James brown',
    email: 'james.brown@example.com',
    password: 'redheads',
    phone: '475-688-8966',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
    address: '6368 West Ave',
    age: 60,
};

function RandomContainer() {
    const classes = useStyles();
    const [curPersondata, setcurPersondata] = useState([]);
    const [clickCheck, setclickCheck] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [name, setname] = useState(defaultvalue.name);
    const [email, setemail] = useState(defaultvalue.email);
    const [password, setpassword] = useState(defaultvalue.password);
    const [phone, setphone] = useState(defaultvalue.phone);
    const [image, setimage] = useState(defaultvalue.image);
    const [address, setaddress] = useState(defaultvalue.address);
    const [age, setage] = useState(defaultvalue.age);
    const [hoverState, sethoverState] = useState({
        upper: `Hi, My name is`,
        lower: name,
    });

    useEffect(() => {
        fetchData();
    }, [clickCheck]);

    const fetchData = async () => {
        try {
            setisLoading(true);
            const response = await fetch(url);
            const getData = await response.json();
            setcurPersondata(getData.results);
            setisLoading(false);
        } catch (error) {
            throw new Error(error);
        }
    };

    const handlecheck = (curentHover) => {
        if (curentHover === 'name') {
            sethoverState({ upper: 'Hi, My name is', lower: name });
        } else if (curentHover === 'email') {
            sethoverState({ upper: 'My email is', lower: email });
        } else if (curentHover === 'age') {
            sethoverState({ upper: 'My age is', lower: age });
        } else if (curentHover === 'address') {
            sethoverState({ upper: 'My address is', lower: address });
        } else if (curentHover === 'phone') {
            sethoverState({ upper: 'My number is', lower: phone });
        } else if (curentHover === 'password') {
            sethoverState({ upper: 'My password is', lower: password });
        }
    };

    const handleClick = (data) => {
        setclickCheck(!clickCheck);
        let newName = `${data[0].name.first} ${data[0].name.last}`;
        let newEmail = data[0].email;
        let newAge = data[0].dob.age;
        let newPassword = data[0].login.password;
        let newPhone = data[0].phone;
        let newImage = data[0].picture.large;
        let newAddress = `${data[0].location.street.number} ${data[0].location.street.name}`;
        setname(newName);
        setemail(newEmail);
        setpassword(newPassword);
        setage(newAge);
        setphone(newPhone);
        setimage(newImage);
        setaddress(newAddress);
    };

    return (
        <Card className={classes.root}>
            {isLoading ? (
                <div className={classes.loader}>
                    <CircularProgress size='70px' />
                </div>
            ) : (
                <React.Fragment>
                    <div className={classes.upper} />
                    <div className={classes.personImage}>
                        <Avatar
                            alt='Remy Sharp'
                            src={image}
                            className={classes.large}
                        />
                    </div>
                    <div className={classes.middle}>
                        <h3 style={{ color: '#555', letterSpacing: '1.5px' }}>
                            {hoverState.upper}
                        </h3>
                        <h2 style={{ color: '#555', letterSpacing: '1.5px' }}>
                            {hoverState.lower}
                        </h2>
                    </div>
                    <div className={classes.icons}>
                        <IconButton
                            value={'name'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <PersonIcon className={classes.icon} />
                        </IconButton>
                        <IconButton
                            value={'email'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <EmailIcon className={classes.icon} />
                        </IconButton>
                        <IconButton
                            value={'age'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <CalendarTodayIcon className={classes.icon} />
                        </IconButton>
                        <IconButton
                            value={'address'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <HomeIcon className={classes.icon} />
                        </IconButton>
                        <IconButton
                            value={'phone'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <PhoneIcon className={classes.icon} />
                        </IconButton>
                        <IconButton
                            value={'password'}
                            onMouseOver={(e) => handlecheck(e.target.value)}>
                            <LockIcon className={classes.icon} />
                        </IconButton>
                    </div>
                    <div className={classes.btn}>
                        <Button
                            variant='outlined'
                            color='primary'
                            onClick={() => handleClick(curPersondata)}>
                            Random Person
                        </Button>
                    </div>
                </React.Fragment>
            )}
        </Card>
    );
}

export default RandomContainer;
