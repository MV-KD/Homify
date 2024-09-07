import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clu3mwupt0ds107w2gwfueqoc/master"
const getSlider=async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      

`
const result = await request(MASTER_URL, query);
return result;

}
const getCategories = async()=>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;

}
const getBusinessList= async()=>{
  const query = gql`
  query getBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;

  
}

const getBusinessListByCategory=async(category)=>{
  const query = gql`
  query getBusinessList {
    businessLists(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
}

const createBooking = async (data) => {
  const mutationQuery = gql`
    mutation createBooking($input: BookingCreateInput!) {
      createBooking(data: $input) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  const variables = {
    input: {
      bookingStatus: "Booked",
      date: data.date,
      time: data.time,
      userEmail: data.userEmail,
      userName: data.userName,
      // Omitting businessList here, Hygraph will handle it automatically
    },
  };

  const result = await request(MASTER_URL, mutationQuery, variables);
  return result;
};

const getUserBookings=async(UserEmail)=>{
  const query = gql`
  query GetUserBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "reshmikaks19@gmail.com"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      businessList {
        id
        images {
          url
        }
        name
        address
        contactPerson
        email
        about
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
  
}

export default{
    getSlider ,
    getCategories ,
    getBusinessList,
    getBusinessListByCategory,
    createBooking,
    getUserBookings

} 