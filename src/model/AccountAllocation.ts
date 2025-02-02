import {date, field, immutableRelation, nochange, readonly} from "@nozbe/watermelondb/decorators";
import {Model} from "@nozbe/watermelondb";

export default class AccountAllocation extends Model{
  static table = 'account_allocations';

  static associations = {
    allocations: { type: 'belongs_to', foreignKey: 'allocation_id' },
    accounts: { type: 'belongs_to', foreignKey: 'account_id' },
  };

  @readonly @date('created_at') createdAt?: Date;
  @readonly @date('updated_at') updatedAt?: Date;
  @field('cap') cap?: number;
  @field('amount') amount?: number;
  @nochange @field('user_id') userId?: string;

  @immutableRelation('accounts','account_id') account?: string;
  @immutableRelation('allocations','allocation_id') allocation?: string;

};