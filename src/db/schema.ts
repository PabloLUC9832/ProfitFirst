import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 3,
  tables: [
    tableSchema({
      name: 'accounts',
      columns: [
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
        { name: 'name', type: 'string' },
        { name: 'cap', type: 'number' },
        { name: 'tap', type: 'number' },
        { name: 'user_id', type: 'string' },
      ]
    }),
    tableSchema({
      name: 'allocations',
      columns: [
        { name: 'updated_at', type: 'number' },
        { name: 'created_at', type: 'number' },
        { name: 'income', type: 'number' },
        { name: 'user_id', type: 'string' },
      ]
    }),
    tableSchema({
      name: 'account_allocations',
      columns: [
        { name: 'updated_at', type: 'number' },
        { name: 'created_at', type: 'number' },
        { name: 'account_id', type: 'string' },
        { name: 'allocation_id', type: 'string' },
        { name: 'amount', type: 'number' },
        { name: 'cap', type: 'number' },
        { name: 'user_id', type: 'string' },
      ]
    }),
  ]
})