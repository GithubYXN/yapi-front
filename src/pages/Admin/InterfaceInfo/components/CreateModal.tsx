import { Modal } from 'antd';
import React from 'react';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';

export type Props = {
  columns: ProColumns<API.InterfaceInfoAddRequest>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoAddRequest) => Promise<boolean>;
  open: boolean;
};

const CreateModal: React.FC<Props> = (props) => {
  const { columns, open, onCancel, onSubmit} = props;
  return (
    <Modal title={'新建接口'} footer={null} open={open} onCancel={() => onCancel?.()} >
      <ProTable
        columns={columns}
        type='form'
        onSubmit={async (value)=> {
          onSubmit?.(value)
        }}
      />
    </Modal>
  );
};

export default CreateModal;
