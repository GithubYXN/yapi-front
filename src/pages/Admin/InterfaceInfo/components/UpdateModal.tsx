import { Modal } from 'antd';
import React, {createRef, useEffect, useRef} from 'react';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import {ProFormInstance} from "@ant-design/pro-form/lib";

export type Props = {
  values: API.InterfaceInfo;
  columns: ProColumns<API.InterfaceInfoUpdateRequest>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoUpdateRequest) => Promise<boolean>;
  open: boolean;
};

const UpdateModal: React.FC<Props> = (props) => {
  const { values, columns, open, onCancel, onSubmit } = props;

  const formRef = useRef<ProFormInstance>();

  useEffect(() => {
    if (formRef){
      formRef.current?.setFieldsValue(values);
    }
  }, [values])
  return (
    <Modal title={'修改接口'} footer={null} open={open} onCancel={() => onCancel?.()}>
      <ProTable
        columns={columns}
        type="form"
        formRef={formRef}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};

export default UpdateModal;
