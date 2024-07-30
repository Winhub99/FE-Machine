import React from 'react'

interface CardProps{
  header:string;
  type: 'Facebook' | 'Twitter' | 'Default';

}

const Card:React.FC<CardProps> = ({header,type}) => {
  return (
    <div style={{...styles.card,...styles[type]}}>
      {header}
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      maxWidth: '300px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
      fontSize: '1.5em',
      marginBottom: '12px',
  },
  body: {
      fontSize: '1em',
  },
  Facebook: {
      borderColor: '#1877f2',
      backgroundColor: '#f0f2f5',
      color: '#1877f2',
  },
  Twitter: {
      borderColor: '#1da1f2',
      backgroundColor: '#e8f5fd',
      color: '#1da1f2',
  },
  Default: {
      borderColor: '#ccc',
      backgroundColor: '#fff',
      color: '#000',
  }
};

export default Card
