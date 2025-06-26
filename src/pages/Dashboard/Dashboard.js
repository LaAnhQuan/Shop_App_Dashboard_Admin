import DashboardBox from './components/DashboardBox';
import './Dashboard.scss';
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Menu from "@mui/material/Menu";
import { IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const chartData = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const chartOptions = {
    'backgroundColor': 'transparent',
    'chartArea': { 'width': '100%', 'height': '100%' }
};

const products = [
    {
        uid: "#1",
        product: {
            name: "Tops and skirt set for Female...",
            description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
            image: "https://mironcoder-hotash.netlify.app/images/product/01.webp"
        },
        category: "womans",
        brand: "richman",
        price: { old: "$21.00", new: "$21.00" },
        stock: 30,
        rating: "4.9(16)",
        order: 380,
        sales: "$38k"
    },
    {
        uid: "#2",
        product: {
            name: "Tops and skirt set for Female...",
            description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
            image: "https://mironcoder-hotash.netlify.app/images/product/01.webp"
        },
        category: "womans",
        brand: "richman",
        price: { old: "$21.00", new: "$21.00" },
        stock: 30,
        rating: "4.9(16)",
        order: 380,
        sales: "$38k"
    },
    {
        uid: "#3",
        product: {
            name: "Tops and skirt set for Female...",
            description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
            image: "https://mironcoder-hotash.netlify.app/images/product/01.webp"
        },
        category: "womans",
        brand: "richman",
        price: { old: "$21.00", new: "$21.00" },
        stock: 30,
        rating: "4.9(16)",
        order: 380,
        sales: "$38k"
    },
    {
        uid: "#4",
        product: {
            name: "Tops and skirt set for Female...",
            description: "Women's exclusive summer Tops and skirt set for Female Tops and skirt set",
            image: "https://mironcoder-hotash.netlify.app/images/product/01.webp"
        },
        category: "womans",
        brand: "richman",
        price: { old: "$21.00", new: "$21.00" },
        stock: 30,
        rating: "4.9(16)",
        order: 380,
        sales: "$38k"
    }
];

const Dashboard = () => {
    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setShowBy] = useState('');
    const [categoryBy, setCategoryBy] = useState('');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className='right-content'>
                <div className='row dashboardBoxWrapperRow'>
                    <div className='col-md-8'>
                        <div className='dashboardBoxWrapper d-flex'>
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart />} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<MdShoppingBag />} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack />} />
                        </div>
                    </div>
                    <div className='col-md-4 pl-0'>
                        <div className='box graphBox'>
                            <div className="d-flex align-items-center w-100 bottomEle">
                                <h6 className="text-white mb-0 mt-0" >Total Sales</h6>
                                <div className="ml-auto">
                                    <Button className="ml-auto toggleIcon" onClick={handleClick}><HiDotsVertical /></Button>
                                    <Menu
                                        className="dropdown_menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        slotProps={{
                                            paper: {
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            },
                                            list: {
                                                'aria-labelledby': 'long-button',
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Day
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Week
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Month
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <IoIosTimer /> Last Year
                                        </MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <h3 className='text-white font-weight-bold'>$3,787,681.00</h3>
                            <p>$3,578.90 in last month</p>

                            <Chart
                                chartType="PieChart"
                                width="100%"
                                height="170px"
                                data={chartData}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </div>

                <div className='card shadow border-0 p-3'>
                    <h3 className='hd'>Best Selling Products</h3>

                    <div className='row cardFilters mt-3'>
                        <div className='col-md-3'>
                            <h4>Show by</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={showBy}
                                    displayEmpty
                                    onChange={(e) => setShowBy(e.target.value)}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-md-3'>
                            <h4>Category by</h4>
                            <FormControl size="small" className='w-100'>
                                <Select
                                    value={categoryBy}
                                    displayEmpty
                                    onChange={(e) => setCategoryBy(e.target.value)}
                                    className='w-100'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className='table-responsive mt-3'>
                        <table className='table table-bordered v-align'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>UID</th>
                                    <th style={{ width: '300px' }}>PRODUCT</th>
                                    <th>CATEGORY</th>
                                    <th>BRAND</th>
                                    <th>PRICE</th>
                                    <th>STOCK</th>
                                    <th>RATING</th>
                                    <th>ORDER</th>
                                    <th>SALES</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={product.uid}>
                                        <td>{product.uid}</td>
                                        <td>
                                            <div className='d-flex align-items-center productBox'>
                                                <div className='imgWrapper'>
                                                    <div className='img'>
                                                        <img src={product.product.image} className='w-100' alt={product.product.name} />
                                                    </div>
                                                </div>
                                                <div className='info pl-0'>
                                                    <h6>{product.product.name}</h6>
                                                    <p>{product.product.description}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{product.category}</td>
                                        <td>{product.brand}</td>
                                        <td>
                                            <div style={{ width: '6 0px' }}>
                                                <del className='old'>{product.price.old}</del>
                                                <span className='new text-danger'>{product.price.new}</span>
                                            </div>
                                        </td>
                                        <td>{product.stock}</td>
                                        <td>{product.rating}</td>
                                        <td>{product.order}</td>
                                        <td>{product.sales}</td>
                                        <td>
                                            <div className='actions d-flex align-items-center'>
                                                <Button className="secondary" color="secondary"><FaEye /></Button>
                                                <Button className='success' color="success"><FaPencilAlt /></Button>
                                                <Button className='error' color="error"><MdDelete /></Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className='d-flex tableFooter'>
                            <Pagination
                                count={10}
                                variant="outlined"
                                shape="rounded"
                                className='pagination'
                                showFirstButton
                                showLastButton
                                color='primary'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;